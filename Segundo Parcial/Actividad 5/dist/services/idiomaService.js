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
exports.deleteIdioma = exports.updateIdioma = exports.createIdioma = exports.getIdiomaById = exports.getIdiomas = void 0;
// src/services/idiomaService.ts
const idiomaRepository_1 = __importDefault(require("../repositories/idiomaRepository"));
const getIdiomas = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield idiomaRepository_1.default.getAll();
});
exports.getIdiomas = getIdiomas;
const getIdiomaById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield idiomaRepository_1.default.getById(id);
});
exports.getIdiomaById = getIdiomaById;
const createIdioma = (descripcion) => __awaiter(void 0, void 0, void 0, function* () {
    return yield idiomaRepository_1.default.create(descripcion);
});
exports.createIdioma = createIdioma;
const updateIdioma = (id, nuevaDescripcion) => __awaiter(void 0, void 0, void 0, function* () {
    return yield idiomaRepository_1.default.update(id, nuevaDescripcion);
});
exports.updateIdioma = updateIdioma;
const deleteIdioma = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield idiomaRepository_1.default.delete(id);
});
exports.deleteIdioma = deleteIdioma;
