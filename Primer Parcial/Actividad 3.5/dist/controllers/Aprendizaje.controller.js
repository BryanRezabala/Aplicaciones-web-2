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
exports.deleteaprendizaje = exports.updateaprendizaje = exports.createaprendizaje = exports.getIdaprendizajeById = exports.getAllaprendizaje = void 0;
const client_1 = require("@prisma/client");
const aprendizajeClient = new client_1.PrismaClient().aprendizaje;
const getAllaprendizaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allaprendizaje = yield aprendizajeClient.findMany({
            include: {
                curso: true,
            },
        });
        res.status(200).json({ data: allaprendizaje });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getAllaprendizaje = getAllaprendizaje;
const getIdaprendizajeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aprendizajeId = req.params.id;
        const aprendizaje = yield aprendizajeClient.findUnique({
            where: {
                id: aprendizajeId,
            },
            include: {
                curso: true,
            },
        });
        res.status(200).json({ data: aprendizaje });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getIdaprendizajeById = getIdaprendizajeById;
const createaprendizaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aprendizajeData = req.body;
        const aprendizaje = yield aprendizajeClient.create({
            data: aprendizajeData,
        });
        res.status(201).json({ data: aprendizaje });
    }
    catch (e) {
        console.log(e);
    }
});
exports.createaprendizaje = createaprendizaje;
const updateaprendizaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aprendizajeId = req.params.id;
        const aprendizajeData = req.body;
        const aprendizaje = yield aprendizajeClient.update({
            where: {
                id: aprendizajeId,
            },
            data: aprendizajeData,
        });
        res.status(200).json({ data: aprendizaje });
    }
    catch (e) {
        console.log(e);
    }
});
exports.updateaprendizaje = updateaprendizaje;
const deleteaprendizaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aprendizajeId = req.params.id;
        const aprendizaje = yield aprendizajeClient.delete({
            where: {
                id: aprendizajeId,
            },
        });
        res.status(200).json({ data: {} });
    }
    catch (e) {
        console.log(e);
    }
});
exports.deleteaprendizaje = deleteaprendizaje;
