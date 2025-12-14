export default function validateStrings(items) {
  return (req, res, next) => {
    for (let item of items) {
      if (typeof req.body[item] !== "string") {
        return res.status(400).send({ error: `${item} debe ser un texto` });
      }
    }
    next();
  };
}
