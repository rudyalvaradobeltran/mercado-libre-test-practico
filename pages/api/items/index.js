export default async function handler(req, res) {
  try {
    const results = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=4`
    ).then((result) => result.json());

    const response = { author: { name: "Rudy", lastname: "Alvarado" } };

    response.categories = results["filters"].length > 0
      ? results["filters"][0]["values"][0]["path_from_root"].map(
          (category) => category.name
        )
      : [];

    response.items = results["results"].map((item) => {
      return {
        id: item["id"],
        title: item["title"],
        price: {
          amount: item["price"].toString().split('.')[0],
          currency: item["currency_id"],
          decimals: item["price"].toString().split('.')[1]
        },
        picture: item["thumbnail"],
        condition: item["condition"],
        free_shipping: item["shipping"]["free_shipping"],
      };
    });
    
    res.status(200).json(response);
  } catch (error) {
    throw new Error(error.message);
  }
}
