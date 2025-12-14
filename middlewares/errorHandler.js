export default function errorHandler(err, req, res, next) {
  console.error("ERROR:", err.message);

  res.status(500).send({
    error: "Ocurrió un error en el servidor",
    detalle: err.message
  });
}
