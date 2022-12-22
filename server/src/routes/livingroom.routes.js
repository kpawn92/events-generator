import { Router } from 'express';
import * as livingRoomCtrl from '../controllers/livingroom.controller'
import { verifyToken, isModelator } from '../middlewares/authJwt'
import { verifyEventByParams } from '../middlewares/verifyParams'
import { verifyManagerByBody } from '../middlewares/verifyFkBody'
import { validateLivingRoomDTO } from '../validators/livingroom.validate.dto'
const router = Router();

// TODO: Las salas seran asignadas al evento, guardando el Id del evento en la entidad de Sala
/**
 * @coment : Modelator crea las salas incluyendole el id del evento que sera enviado en la url (verficación de params, token ,rol y validar los datos enviados)
 * @coment : Modelator asigna el manager por cada sala (verficación de token y rol)
 */

router.post('/:eventId', [verifyToken, isModelator, verifyEventByParams, validateLivingRoomDTO, verifyManagerByBody], livingRoomCtrl.createLivingRoom)

export default router;
