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
exports.deleteAprendizaje = exports.updateAprendizaje = exports.createAprendizaje = exports.getAprendizajeById = exports.getAprendizajes = void 0;
// src/services/aprendizajeService.ts
const AprendizajeRepository_1 = __importDefault(require("../repositories/AprendizajeRepository"));
const getAprendizajes = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield AprendizajeRepository_1.default.getAll();
});
exports.getAprendizajes = getAprendizajes;
const getAprendizajeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield AprendizajeRepository_1.default.getById(id);
});
exports.getAprendizajeById = getAprendizajeById;
const createAprendizaje = (idioma_id, instructor_id, fecha, hora, numero_horas, nivel) => __awaiter(void 0, void 0, void 0, function* () {
    return yield AprendizajeRepository_1.default.create(idioma_id, instructor_id, fecha, hora, numero_horas, nivel);
});
exports.createAprendizaje = createAprendizaje;
const updateAprendizaje = (id, idioma_id, instructor_id, fecha, hora, numero_horas, nivel) => __awaiter(void 0, void 0, void 0, function* () {
    return yield AprendizajeRepository_1.default.update(id, idioma_id, instructor_id, fecha, hora, numero_horas, nivel);
});
exports.updateAprendizaje = updateAprendizaje;
const deleteAprendizaje = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield AprendizajeRepository_1.default.delete(id);
});
exports.deleteAprendizaje = deleteAprendizaje;
