"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const client_1 = require("@prisma/client");
const idiomaRoutes = __importStar(require("./routes/idiomaRoutes"));
const instructorRoutes = __importStar(require("./routes/instructorRoutes"));
const aprendizajeRoutes = __importStar(require("./routes/aprendizajeRoutes"));
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Rutas para Idiomas
            const idiomas = yield idiomaRoutes.getIdiomas();
            console.log(idiomas);
            const idioma = yield idiomaRoutes.getIdiomaById(1);
            console.log(idioma);
            const newIdioma = yield idiomaRoutes.createIdioma('Español');
            console.log(newIdioma);
            // Rutas para Instructores
            const instructores = yield instructorRoutes.getInstructores();
            console.log(instructores);
            const instructor = yield instructorRoutes.getInstructorById(1);
            console.log(instructor);
            const newInstructor = yield instructorRoutes.createInstructor('Juan Pérez', '1980-01-01', 10);
            console.log(newInstructor);
            // Rutas para Aprendizajes
            const aprendizajes = yield aprendizajeRoutes.getAprendizajes();
            console.log(aprendizajes);
            const aprendizaje = yield aprendizajeRoutes.getAprendizajeById(1);
            console.log(aprendizaje);
            const newAprendizaje = yield aprendizajeRoutes.createAprendizaje(1, 1, '2024-06-11', '16:00', 2, 'Intermedio');
            console.log(newAprendizaje);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Servidor iniciado');
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
