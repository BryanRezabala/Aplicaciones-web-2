"use strict";
/* const express  = require('express');
const router   = express.Router();
const app = express();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient(); */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const idioma_router_1 = __importDefault(require("./routes/idioma.router"));
const Instructor_router_1 = __importDefault(require("./routes/Instructor.router"));
const Curso_router_1 = __importDefault(require("./routes/Curso.router"));
const aprendizaje_router_1 = __importDefault(require("./routes/aprendizaje.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/idioma", idioma_router_1.default);
app.use("/instructo", Instructor_router_1.default);
app.use("/curso", Curso_router_1.default);
app.use("/aprendizaje", aprendizaje_router_1.default);
app.get('/ping', (req, res) => {
    res.json({ message: "pong" }).status(200);
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
