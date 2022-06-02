const { client } = require("../../../redis/index.js");

export default async function handler(req, res) {
  try {
    var result = await client.get(req.query.id, (err, result) => {
      if (err) {
        return null;
      }
      return result;
    });

    if (result) {
      res.status(200).json(JSON.parse(result));
      return;
    } else {
      result = await fetch(
        `https://api.mercadolibre.com/items/${req.query.id}`
      ).then((result) => result.json());

      if (result.error) {
        res.status(404).send("Not found");
        return;
      }

      const description = await fetch(
        `https://api.mercadolibre.com/items/${req.query.id}/description`
      ).then((result) => result.json());

      const categories = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${result["title"]}&limit=1`
      ).then((result) => result.json());

      const response = {
        author: {
          name: process.env.AUTHOR_NAME,
          lastname: process.env.AUTHOR_LASTNAME,
        },
      };

      response.categories =
        categories["filters"].length > 0
          ? categories["filters"][0]["values"][0]["path_from_root"].map(
              (category) => category.name
            )
          : [];

      if (result["id"]) {
        response.item = {
          id: result["id"],
          title: result["title"],
          price: {
            amount: result["price"].toString().split(".")[0],
            currency: result["currency_id"],
            decimals: result["price"].toString().split(".")[1],
          },
          picture: result["pictures"][0]["url"],
          condition: result["condition"],
          free_shipping: result["shipping"]["free_shipping"],
          sold_quantity: result["sold_quantity"],
          description: description["error"]
            ? "No hay descripción para este producto"
            : description["plain_text"],
        };
      }

      await client.set(
        req.query.id,
        JSON.stringify(response),
        "EX",
        parseInt(process.env.EXPIRES_AT)
      );

      res.status(200).json(response);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
