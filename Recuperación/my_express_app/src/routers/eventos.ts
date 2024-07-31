import { Router } from 'express';
import { agregar100Eventos, crearEvento, obtenerEventos, obtenerEvento, actualizarEvento, eliminarEvento } from '../controllers/eventosController';

const router = Router();

router.post('/agregar100', agregar100Eventos);
router.post('/', crearEvento);
router.get('/', obtenerEventos);
router.get('/:id', obtenerEvento);
router.put('/:id', actualizarEvento);
router.delete('/:id', eliminarEvento);

export default router;
