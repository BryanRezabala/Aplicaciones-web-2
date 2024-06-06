"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const router = express_1.default.Router();
router.get('/idiomas', controllers_1.getIdiomas);
router.get('/idiomas/:id', controllers_1.getIdiomaById);
router.get('/instructores', controllers_1.getInstructores);
router.get('/instructores/:id', controllers_1.getInstructorById);
router.get('/aprendizajes', controllers_1.getAprendizajes);
router.get('/aprendizajes/:id', controllers_1.getAprendizajeById);
router.post('/aprendizajes', controllers_1.createAprendizaje); // Ruta POST para crear un aprendizaje
exports.default = router;
