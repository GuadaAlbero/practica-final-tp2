class Controller {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res) => {
    try {
      const data = await this.service.getAll();
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.service.getById(id);
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  };

  create = async (req, res) => {
    try {
      const data = await this.service.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.service.update(id, req.body);
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      await this.service.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}

export default Controller;
