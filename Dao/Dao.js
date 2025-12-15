class Dao {
  constructor() {
    this.data = []; // acá guardamos los vuelos en memoria
  }

  // Obtener todos los vuelos
  getAll = async () => {
    return this.data;
  };

  // Buscar vuelo por ID
  getById = async (id) => {
    return this.data.find((v) => v.id === id);
  };

  // Crear nuevo vuelo
  create = async (vuelo) => {
    this.data.push(vuelo);
    return vuelo;
  };

  // Actualizar vuelo existente
  update = async (id, newData) => {
    const index = this.data.findIndex((v) => v.id === id);
    if (index !== -1) {
      this.data[index] = newData;
      return this.data[index];
    }
    return null;
  };
}

export default Dao;
