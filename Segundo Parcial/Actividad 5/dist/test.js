"use strict";
// src/test.ts
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
const client_1 = __importDefault(require("./prisma/client"));
const idioma_entity_1 = require("./entities/idioma.entity");
const instructor_entity_1 = require("./entities/instructor.entity");
const aprendizaje_entity_1 = require("./entities/aprendizaje.entity");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Ejemplo de creación de un idioma
            const nuevoIdioma = yield idioma_entity_1.IdiomaEntity.create({ descripcion: 'Español' });
            console.log('Nuevo idioma creado:', nuevoIdioma);
            // Ejemplo de creación de un instructor
            const nuevoInstructor = yield instructor_entity_1.InstructorEntity.create({
                nombre: 'Juan Pérez',
                fecha_de_nacimiento: '1980-01-01',
                experiencia: 10,
            });
            console.log('Nuevo instructor creado:', nuevoInstructor);
            // Ejemplo de crear un nuevo aprendizaje
            // Usar la relación correcta según tu modelo de datos
            const nuevoAprendizaje = yield aprendizaje_entity_1.AprendizajeEntity.create({
                idioma: { connect: { id: nuevoIdioma.id } }, // Relación correcta
                instructor: { connect: { id: nuevoInstructor.id } }, // Relación correcta
                fecha: '2024-06-15',
                hora: '10:00',
                numero_horas: 1,
                nivel: 'Principiante',
            });
            console.log('Nuevo aprendizaje creado:', nuevoAprendizaje);
            // Ejemplo de buscar un instructor por ID
            const instructorEncontrado = yield instructor_entity_1.InstructorEntity.findById(nuevoInstructor.id);
            console.log('Instructor encontrado:', instructorEncontrado);
        }
        catch (error) {
            console.error('Error en prueba:', error);
        }
        finally {
            yield client_1.default.$disconnect();
        }
    });
}
main();
