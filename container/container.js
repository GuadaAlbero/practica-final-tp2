import Dao from "../Dao/Dao.js";
import Service from "../service/Service.js";
import Controller from "../controller/Controller.js";

const dao = new Dao();
const service = new Service(dao);
const controller = new Controller(service);

export default controller;
