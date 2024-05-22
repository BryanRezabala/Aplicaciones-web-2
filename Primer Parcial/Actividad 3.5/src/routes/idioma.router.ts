import { Router } from "express";

import {
    getAllIdioma,
    getIdiomaById,
    createIdioma,
    updateIdioma,
    deleteIdioma,
} from "../controllers/idioma.controller";

const idiomaRouter = Router();

idiomaRouter.get("/", getAllIdioma);
idiomaRouter.get("/:id", getIdiomaById);
idiomaRouter.post("/", createIdioma);
idiomaRouter.put("/:id", updateIdioma);
idiomaRouter.delete("/:id", deleteIdioma);

export default idiomaRouter;