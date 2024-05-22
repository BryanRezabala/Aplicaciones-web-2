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
exports.deleteinstructor = exports.updateinstructor = exports.createinstructor = exports.getIdinstructorById = exports.getAllinstructor = void 0;
const client_1 = require("@prisma/client");
const instructorClient = new client_1.PrismaClient().instructor;
// getAllAuthors
const getAllinstructor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allinstructor = yield instructorClient.findMany({
            include: {
                cursos: true,
            },
        });
        res.status(200).json({ data: allinstructor });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getAllinstructor = getAllinstructor;
// getAuthorById
const getIdinstructorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instructorId = req.params.id;
        const instructor = yield instructorClient.findUnique({
            where: {
                id: instructorId,
            },
            include: {
                cursos: true,
            },
        });
        res.status(200).json({ data: instructor });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getIdinstructorById = getIdinstructorById;
// createAuthor
const createinstructor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instructorData = req.body;
        const instructor = yield instructorClient.create({
            data: instructorData,
        });
        res.status(201).json({ data: instructor });
    }
    catch (e) {
        console.log(e);
    }
});
exports.createinstructor = createinstructor;
// updateAuthor
const updateinstructor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instructorId = req.params.id;
        const instructorData = req.body;
        const instructor = yield instructorClient.update({
            where: {
                id: instructorId,
            },
            data: instructorData,
        });
        res.status(200).json({ data: instructor });
    }
    catch (e) {
        console.log(e);
    }
});
exports.updateinstructor = updateinstructor;
// deleteAuthor
const deleteinstructor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instructorId = req.params.id;
        const instructor = yield instructorClient.delete({
            where: {
                id: instructorId,
            },
        });
        res.status(200).json({ data: {} });
    }
    catch (e) {
        console.log(e);
    }
});
exports.deleteinstructor = deleteinstructor;
