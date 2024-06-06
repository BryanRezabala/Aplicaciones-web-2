"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAprendizaje = exports.getAprendizajeById = exports.getAprendizajes = exports.getInstructorById = exports.getInstructores = exports.getIdiomaById = exports.getIdiomas = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getIdiomas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idiomas = yield prisma.idioma.findMany();
        res.json(idiomas);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los idiomas' });
    }
});
exports.getIdiomas = getIdiomas;
const getIdiomaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const idioma = yield prisma.idioma.findUnique({ where: { id: Number(id) } });
        if (idioma) {
            res.json(idioma);
        }
        else {
            res.status(404).json({ error: 'Idioma no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el idioma' });
    }
});
exports.getIdiomaById = getIdiomaById;
const getInstructores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instructores = yield prisma.instructor.findMany();
        res.json(instructores);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los instructores' });
    }
});
exports.getInstructores = getInstructores;
const getInstructorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const instructor = yield prisma.instructor.findUnique({ where: { id: Number(id) } });
        if (instructor) {
            res.json(instructor);
        }
        else {
            res.status(404).json({ error: 'Instructor no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el instructor' });
    }
});
exports.getInstructorById = getInstructorById;
const getAprendizajes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aprendizajes = yield prisma.aprendizaje.findMany();
        res.json(aprendizajes);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los aprendizajes' });
    }
});
exports.getAprendizajes = getAprendizajes;
const getAprendizajeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const aprendizaje = yield prisma.aprendizaje.findUnique({ where: { id: Number(id) } });
        if (aprendizaje) {
            res.json(aprendizaje);
        }
        else {
            res.status(404).json({ error: 'Aprendizaje no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el aprendizaje' });
    }
});
exports.getAprendizajeById = getAprendizajeById;
const createAprendizaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Aquí va la lógica para crear un aprendizaje
        res.status(200).json({ message: 'Aprendizaje creado correctamente' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear el aprendizaje' });
    }
});
exports.createAprendizaje = createAprendizaje;
