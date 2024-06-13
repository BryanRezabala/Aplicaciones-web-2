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
exports.AprendizajeEntity = void 0;
const client_1 = __importDefault(require("../prisma/client"));
class AprendizajeEntity {
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return client_1.default.aprendizaje.findMany();
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return client_1.default.aprendizaje.findUnique({ where: { id } });
        });
    }
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return client_1.default.aprendizaje.create({ data });
        });
    }
    static update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return client_1.default.aprendizaje.update({ where: { id }, data });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return client_1.default.aprendizaje.delete({ where: { id } });
        });
    }
}
exports.AprendizajeEntity = AprendizajeEntity;
exports.default = AprendizajeEntity;
