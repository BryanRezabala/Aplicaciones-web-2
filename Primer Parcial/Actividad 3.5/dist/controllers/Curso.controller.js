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
exports.deletecurso = exports.updatecurso = exports.createcurso = exports.getIdcursoById = exports.getAllcurso = void 0;
const client_1 = require("@prisma/client");
const cursoClient = new client_1.PrismaClient().curso;
const getAllcurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allcurso = yield cursoClient.findMany({
            include: {
                aprendizajes: true,
            },
        });
        res.status(200).json({ data: allcurso });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getAllcurso = getAllcurso;
const getIdcursoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cursoId = req.params.id;
        const curso = yield cursoClient.findUnique({
            where: {
                id: cursoId,
            },
            include: {
                aprendizajes: true,
            },
        });
        res.status(200).json({ data: curso });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getIdcursoById = getIdcursoById;
const createcurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cursoData = req.body;
        const curso = yield cursoClient.create({
            data: cursoData,
        });
        res.status(201).json({ data: curso });
    }
    catch (e) {
        console.log(e);
    }
});
exports.createcurso = createcurso;
const updatecurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cursoId = req.params.id;
        const cursoData = req.body;
        const curso = yield cursoClient.update({
            where: {
                id: cursoId,
            },
            data: cursoData,
        });
        res.status(200).json({ data: curso });
    }
    catch (e) {
        console.log(e);
    }
});
exports.updatecurso = updatecurso;
const deletecurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cursoId = req.params.id;
        const curso = yield cursoClient.delete({
            where: {
                id: cursoId,
            },
        });
        res.status(200).json({ data: {} });
    }
    catch (e) {
        console.log(e);
    }
});
exports.deletecurso = deletecurso;
