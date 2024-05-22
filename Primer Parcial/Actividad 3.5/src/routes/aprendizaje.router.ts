import { Router } from "express";

import {
    getAllaprendizaje,
    getIdaprendizajeById,
    createaprendizaje,
    updateaprendizaje,
    deleteaprendizaje,
} from "../controllers/Aprendizaje.controller";

const aprendizajeRouter = Router();

aprendizajeRouter.get("/", getAllaprendizaje);
aprendizajeRouter.get("/:id", getIdaprendizajeById);
aprendizajeRouter.post("/", createaprendizaje);
aprendizajeRouter.put("/:id", updateaprendizaje);
aprendizajeRouter.delete("/:id", deleteaprendizaje);

export default aprendizajeRouter;