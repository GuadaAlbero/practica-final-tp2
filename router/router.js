import { Router } from "express";
import controller from "../container/container.js";
import validateNumbers from "../middlewares/validateNumbers.js";
import validateId from "../middlewares/validateId.js";

const router = Router();

router.get("/vuelos", controller.getAll);
router.get("/vuelos/:id", controller.getById);
router.post(
  "/vuelos",
  validateId,
  validateNumbers(["xa", "ya", "za"]),
  controller.create
);

export default router;


