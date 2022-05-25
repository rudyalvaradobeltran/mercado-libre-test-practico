export default async function handler(req, res) {
  const results = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`
  ).then((result) => result.json());
  res.status(200).json({ results });
}
