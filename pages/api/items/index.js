export default async function handler(req, res) {
  try {
    const results = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=4`
    ).then((result) => result.json());
    const response = { author: { name: 'Rudy', lastname: 'Alvarado' } };
    response.categories = results["filters"][0]["values"][0]["path_from_root"].map(category => category.name);
    response.items = results["results"].map(item => {
      return {
        id: item["id"],
        title: item["title"],
        price: {
          amount: item["price"],
          currency: item["currency_id"],
          decimals: 0
        },
        picture: item["thumbnail"],
        condition: item["condition"],
        free_shipping: item["shipping"]["free_shipping"],
      }
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
