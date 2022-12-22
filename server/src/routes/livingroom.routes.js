import { Router } from 'express';
import * as livingRoomCtrl from '../controllers/livingroom.controller'
import { verifyToken, isModelator } from '../middlewares/authJwt'

const router = Router();

// TODO: Las salas seran asignadas al evento, guardando el Id del evento en la entidad de Sala
/**
 * @coment : Modelator crea las salas incluyendole el evento (verficación de token y rol)
 * @coment : Modelator asigna el manager por cada sala (verficación de token y rol)
 */

router.post('/', [verifyToken, isModelator], livingRoomCtrl.createLivingRoom)

export default router;
