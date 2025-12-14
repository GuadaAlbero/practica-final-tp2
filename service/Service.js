class Service {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = async () => {
    return await this.dao.getAll();
  };

  getById = async (id) => {
    const item = await this.dao.getById(id);
    if (!item) throw new Error("ID no encontrado");
    return item;
  };

  create = async (data) => {
    return await this.dao.create(data);
  };

  update = async (id, data) => {
    return await this.dao.update(id, data);
  };

  delete = async (id) => {
    return await this.dao.delete(id);
  };
}

export default Service;
