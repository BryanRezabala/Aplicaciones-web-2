/* const express  = require('express');
const router   = express.Router();
const app = express();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient(); */

import express from 'express'
import idiomaRouter from "./routes/idioma.router";
import instructorRouter from "./routes/Instructor.router";
import cursoRouter from "./routes/Curso.router";
import aprendizajeRouter from "./routes/aprendizaje.router";
const app = express();

app.use(express.json());
app.use("/idioma", idiomaRouter);
app.use("/instructo", instructorRouter);
app.use("/curso", cursoRouter);
app.use("/aprendizaje", aprendizajeRouter);
app.get('/ping',(req,res)=>{
    res.json({message:"pong"}).status(200);
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});