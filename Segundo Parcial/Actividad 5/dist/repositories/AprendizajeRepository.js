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
// src/repositories/AprendizajeRepository.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AprendizajeRepository {
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.aprendizaje.findMany();
            }
            catch (error) {
                throw new Error('Error retrieving aprendizajes');
            }
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.aprendizaje.findUnique({
                    where: { id }
                });
            }
            catch (error) {
                throw new Error(`Error retrieving aprendizaje with id ${id}`);
            }
        });
    }
    static create(idioma_id, instructor_id, fecha, hora, numero_horas, nivel) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.aprendizaje.create({
                    data: {
                        idioma_id,
                        instructor_id,
                        fecha,
                        hora,
                        numero_horas,
                        nivel
                    }
                });
            }
            catch (error) {
                throw new Error('Error creating aprendizaje');
            }
        });
    }
    static update(id, idioma_id, instructor_id, fecha, hora, numero_horas, nivel) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.aprendizaje.update({
                    where: { id },
                    data: {
                        idioma_id,
                        instructor_id,
                        fecha,
                        hora,
                        numero_horas,
                        nivel
                    }
                });
            }
            catch (error) {
                throw new Error(`Error updating aprendizaje with id ${id}`);
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.aprendizaje.delete({
                    where: { id }
                });
            }
            catch (error) {
                throw new Error(`Error deleting aprendizaje with id ${id}`);
            }
        });
    }
}
exports.default = AprendizajeRepository;
