import { Router } from "express";

import {
    getAllcurso,
    getIdcursoById,
    createcurso,
    updatecurso,
    deletecurso,
} from "../controllers/Curso.controller";

const cursoRouter = Router();

cursoRouter.get("/", getAllcurso);
cursoRouter.get("/:id", getIdcursoById);
cursoRouter.post("/", createcurso);
cursoRouter.put("/:id", updatecurso);
cursoRouter.delete("/:id", deletecurso);

export default cursoRouter;