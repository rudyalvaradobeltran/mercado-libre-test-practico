const { client } = require("../../../redis/index.js");

export default async function handler(req, res) {
  try {
    var results = await client.get(`q=${req.query.q}`, (err, results) => {
      if (err) {
        return null;
      }
      return results;
    });

    if (results) {
      res.status(200).json(JSON.parse(results));
      return;
    } else {
      results = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=4`
      ).then((result) => result.json());

      const response = {
        author: {
          name: process.env.AUTHOR_NAME,
          lastname: process.env.AUTHOR_LASTNAME,
        },
      };

      response.categories =
        results["filters"].length > 0
          ? results["filters"][0]["values"][0]["path_from_root"].map(
              (category) => category.name
            )
          : [];

      response.items = results["results"].map((item) => {
        return {
          id: item["id"],
          title: item["title"],
          price: {
            amount: item["price"].toString().split(".")[0],
            currency: item["currency_id"],
            decimals: item["price"].toString().split(".")[1],
          },
          picture: item["thumbnail"],
          condition: item["condition"],
          free_shipping: item["shipping"]["free_shipping"],
        };
      });

      await client.set(
        `q=${req.query.q}`,
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
