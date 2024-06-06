import express from 'express';
import { getIdiomas, getIdiomaById, getInstructores, getInstructorById, getAprendizajes, getAprendizajeById, createAprendizaje } from './controllers';
import { getGimnasioData } from './controllers';

const router = express.Router();

router.get('/idiomas', getIdiomas);
router.get('/idiomas/:id', getIdiomaById);
router.get('/instructores', getInstructores);
router.get('/instructores/:id', getInstructorById);
router.get('/aprendizajes', getAprendizajes);
router.get('/aprendizajes/:id', getAprendizajeById);
router.post('/aprendizajes', createAprendizaje); 
router.get('/gimnasio', getGimnasioData );


export default router;
