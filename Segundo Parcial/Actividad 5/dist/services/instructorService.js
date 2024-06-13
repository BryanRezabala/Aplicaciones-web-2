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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInstructor = exports.updateInstructor = exports.createInstructor = exports.getInstructorById = exports.getInstructores = void 0;
// src/services/instructorService.ts
const InstructorRepository_1 = __importDefault(require("../repositories/InstructorRepository"));
const getInstructores = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield InstructorRepository_1.default.getAll();
});
exports.getInstructores = getInstructores;
const getInstructorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield InstructorRepository_1.default.getById(id);
});
exports.getInstructorById = getInstructorById;
const createInstructor = (nombre, fecha_de_nacimiento, experiencia) => __awaiter(void 0, void 0, void 0, function* () {
    return yield InstructorRepository_1.default.create(nombre, fecha_de_nacimiento, experiencia);
});
exports.createInstructor = createInstructor;
const updateInstructor = (id, nombre, fecha_de_nacimiento, experiencia) => __awaiter(void 0, void 0, void 0, function* () {
    return yield InstructorRepository_1.default.update(id, nombre, fecha_de_nacimiento, experiencia);
});
exports.updateInstructor = updateInstructor;
const deleteInstructor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield InstructorRepository_1.default.delete(id);
});
exports.deleteInstructor = deleteInstructor;
