class Controller {
  constructor(service) {
    this.service = service;
  }

  // GET: listar todos los vuelos
  getAll = async (req, res) => {
    try {
      const vuelos = await this.service.getAll();
      res.status(200).send(vuelos);
    } catch (error) {
      res.status(400).send({ errorMsg: error.message });
    }
  };

  getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await this.service.getById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ errorMsg: error.message });
  }
};


  // POST: crear o actualizar vuelo
  create = async (req, res) => {
    try {
      const result = await this.service.createOrUpdate(req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ errorMsg: error.message });
    }
  };
}

export default Controller;
