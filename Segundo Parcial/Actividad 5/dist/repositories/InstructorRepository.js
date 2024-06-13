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
// src/repositories/InstructorRepository.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class InstructorRepository {
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.instructor.findMany();
            }
            catch (error) {
                throw new Error('Error retrieving instructors');
            }
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.instructor.findUnique({
                    where: { id }
                });
            }
            catch (error) {
                throw new Error(`Error retrieving instructor with id ${id}`);
            }
        });
    }
    static create(nombre, fecha_de_nacimiento, experiencia) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.instructor.create({
                    data: {
                        nombre,
                        fecha_de_nacimiento,
                        experiencia
                    }
                });
            }
            catch (error) {
                throw new Error('Error creating instructor');
            }
        });
    }
    static update(id, nombre, fecha_de_nacimiento, experiencia) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.instructor.update({
                    where: { id },
                    data: {
                        nombre,
                        fecha_de_nacimiento,
                        experiencia
                    }
                });
            }
            catch (error) {
                throw new Error(`Error updating instructor with id ${id}`);
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.instructor.delete({
                    where: { id }
                });
            }
            catch (error) {
                throw new Error(`Error deleting instructor with id ${id}`);
            }
        });
    }
}
exports.default = InstructorRepository;
