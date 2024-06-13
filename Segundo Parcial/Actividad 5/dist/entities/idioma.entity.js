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
exports.IdiomaEntity = void 0;
const client_1 = __importDefault(require("../prisma/client"));
class IdiomaEntity {
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return client_1.default.idioma.create({ data });
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return client_1.default.idioma.findUnique({ where: { id } });
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return client_1.default.idioma.findMany();
        });
    }
}
exports.IdiomaEntity = IdiomaEntity;
exports.default = IdiomaEntity;
