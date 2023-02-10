import express from 'express';
import { paginaInicio, paginaNosotros, paginaOpiniones, paginaViajes, paginaDetalle } from '../controllers/paginasController.js';
import { guardarOpinion } from '../controllers/opinionController.js';
const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/opiniones', paginaOpiniones);
router.post('/opiniones', guardarOpinion);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalle);




export default router;