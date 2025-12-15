export default function validateId(req, res, next) {
  const { id } = req.body;

  if (!/^[A-Za-z]{3}[0-9]{3}$/.test(id)) {
    return res.status(400).send({ errorMsg: "datos no válidos" });
  }

  next();
}
