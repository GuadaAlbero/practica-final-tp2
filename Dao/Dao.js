class Dao {
  data = [];

  getAll = async () => {
    return this.data;
  };

  getById = async (id) => {
    return this.data.find(item => item.id === id);
  };

  create = async (data) => {
    this.data.push(data);
    return data;
  };

  update = async (id, newData) => {
    const index = this.data.findIndex(item => item.id === id);
    if (index === -1) throw new Error("ID not found");

    this.data[index] = { ...this.data[index], ...newData };
    return this.data[index];
  };

  delete = async (id) => {
    const index = this.data.findIndex(item => item.id === id);
    if (index === -1) throw new Error("ID not found");

    this.data.splice(index, 1);
    return true;
  };
}

export default Dao;
