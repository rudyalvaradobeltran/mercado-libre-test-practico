export default async function handler(req, res) {
  const result = await fetch(
    `https://api.mercadolibre.com/items/${req.query.id}`
  ).then((result) => result.json());
  const description = await fetch(
    `https://api.mercadolibre.com/items/${req.query.id}/description`
  ).then((result) => result.json());
  res.status(200).json({ result, description });
}
