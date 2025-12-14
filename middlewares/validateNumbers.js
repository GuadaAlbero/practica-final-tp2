export default function validateNumbers(items) {
  return (req, res, next) => {
    for (let item of items) {
      if (typeof req.body[item] !== "number") {
        return res.status(400).send({ error: `${item} debe ser un número` });
      }
    }
    next();
  };
}

