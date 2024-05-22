"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const idioma_controller_1 = require("../controllers/idioma.controller");
const idiomaRouter = (0, express_1.Router)();
idiomaRouter.get("/", idioma_controller_1.getAllIdioma);
idiomaRouter.get("/:id", idioma_controller_1.getIdiomaById);
idiomaRouter.post("/", idioma_controller_1.createIdioma);
idiomaRouter.put("/:id", idioma_controller_1.updateIdioma);
idiomaRouter.delete("/:id", idioma_controller_1.deleteIdioma);
exports.default = idiomaRouter;