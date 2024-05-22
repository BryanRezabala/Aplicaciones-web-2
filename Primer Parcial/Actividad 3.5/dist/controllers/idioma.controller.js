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
exports.deleteIdioma = exports.updateIdioma = exports.createIdioma = exports.getIdiomaById = exports.getAllIdioma = void 0;
const client_1 = require("@prisma/client");
const idiomaClient = new client_1.PrismaClient().idioma;
// getAllAuthors
const getAllIdioma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allIdioma = yield idiomaClient.findMany({
            include: {
                cursos: true,
            },
        });
        res.status(200).json({ data: allIdioma });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getAllIdioma = getAllIdioma;
// getAuthorById
const getIdiomaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idiomaId = req.params.id;
        const idioma = yield idiomaClient.findUnique({
            where: {
                id: idiomaId,
            },
            include: {
                cursos: true,
            },
        });
        res.status(200).json({ data: idioma });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getIdiomaById = getIdiomaById;
// createAuthor
const createIdioma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idiomaData = req.body;
        const idioma = yield idiomaClient.create({
            data: {
                descripcion: idiomaData.descripcion
            },
        });
        res.status(201).json({ data: idioma });
    }
    catch (e) {
        console.log(e);
    }
});
exports.createIdioma = createIdioma;
// updateAuthor
const updateIdioma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idiomaId = req.params.id;
        const idiomaData = req.body;
        const idioma = yield idiomaClient.update({
            where: {
                id: idiomaId,
            },
            data: idiomaData,
        });
        res.status(200).json({ data: idioma });
    }
    catch (e) {
        console.log(e);
    }
});
exports.updateIdioma = updateIdioma;
// deleteAuthor
const deleteIdioma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idiomaId = req.params.id;
        const idioma = yield idiomaClient.delete({
            where: {
                id: idiomaId,
            },
        });
        res.status(200).json({ data: {} });
    }
    catch (e) {
        console.log(e);
    }
});
exports.deleteIdioma = deleteIdioma;
