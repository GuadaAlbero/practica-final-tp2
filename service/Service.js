class Service {
  constructor(dao) {
    this.dao = dao;
  }

  // GET: obtener todos los vuelos
  getAll = async () => {
    return await this.dao.getAll();
  };

  getById = async (id) => {
  const vuelo = await this.dao.getById(id);
  if (!vuelo) throw new Error("datos no válidos");
  return vuelo;
};

  // POST: crear o actualizar vuelo + detectar colisiones
  createOrUpdate = async (data) => {
    const { id } = data;

    // 1️⃣ Ver si el vuelo ya existe
    const existing = await this.dao.getById(id);

    let vuelo;
    if (existing) {
      // 2️⃣ Si existe → actualizar
      vuelo = await this.dao.update(id, data);
    } else {
      // 3️⃣ Si no existe → crear nuevo
      vuelo = await this.dao.create(data);
    }

    // 4️⃣ Obtener todos los vuelos almacenados
    const all = await this.dao.getAll();
    const peligros = [];

    // 5️⃣ Calcular distancia con todos los vuelos
    for (const v of all) {
      if (v.id === id) continue; // no comparar contra sí mismo

      const distancia = this.calcularDistancia(vuelo, v);

      if (distancia < 500) {
        peligros.push(v.id);
      }
    }

    // 6️⃣ Imprimir alerta si corresponde
    if (peligros.length > 0) {
      console.log("⚠️ ALARMA DE COLISIÓN con:", peligros);
    }

    // 7️⃣ Devolver array de ids en peligro
    return peligros;
  };

  // --------------------------
  // Método para calcular distancia
  // --------------------------
  calcularDistancia = (a, b) => {
    return Math.sqrt(
      Math.pow(a.xa - b.xa, 2) +
        Math.pow(a.ya - b.ya, 2) +
        Math.pow(a.za - b.za, 2)
    );
  };
}

export default Service;
