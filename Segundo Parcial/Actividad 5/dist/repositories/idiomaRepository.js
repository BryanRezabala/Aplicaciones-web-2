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
// src/repositories/IdiomaRepository.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class IdiomaRepository {
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.idioma.findMany();
            }
            catch (error) {
                console.error('Error retrieving idiomas:', error);
                throw new Error('Error retrieving idiomas');
            }
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.idioma.findUnique({
                    where: { id }
                });
            }
            catch (error) {
                console.error(`Error retrieving idioma with id ${id}:`, error);
                throw new Error(`Error retrieving idioma with id ${id}`);
            }
        });
    }
    static create(descripcion) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.idioma.create({
                    data: { descripcion }
                });
            }
            catch (error) {
                console.error('Error creating idioma:', error);
                throw new Error('Error creating idioma');
            }
        });
    }
    static update(id, nuevaDescripcion) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.idioma.update({
                    where: { id },
                    data: { descripcion: nuevaDescripcion }
                });
            }
            catch (error) {
                console.error(`Error updating idioma with id ${id}:`, error);
                throw new Error(`Error updating idioma with id ${id}`);
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.idioma.delete({
                    where: { id }
                });
            }
            catch (error) {
                console.error(`Error deleting idioma with id ${id}:`, error);
                throw new Error(`Error deleting idioma with id ${id}`);
            }
        });
    }
}
exports.default = IdiomaRepository;
