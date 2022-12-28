import { Router } from 'express';
import * as livingRoomCtrl from '../controllers/livingroom.controller';
import { verifyToken, isModelator } from '../middlewares/authJwt';
import {
    verifyEventByParams,
    verifyLivingRoomByParams,
} from '../middlewares/verifyParams';
import { verifyManagerByBody } from '../middlewares/verifyFkBody';
import { validateLivingRoomDTO } from '../validators/livingroom.validate.dto';
const router = Router();

// TODO: Las salas seran asignadas al evento, guardando el Id del evento en la entidad de Sala

/**
 * @swagger
 *  tags:
 *      name: Living room
 *      description: Endpoint para manejar informacion relacionada con las salas donde se efectuaran los eventos
 */

/**
 * @swagger
 *  components:
 *      parameters:
 *      schemas:
 *          BodyLivingPost:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  description:
 *                      type: string
 */

router.post(
    '/:eventId',
    [
        verifyToken,
        isModelator,
        verifyEventByParams,
        validateLivingRoomDTO,
        verifyManagerByBody,
    ],
    livingRoomCtrl.createLivingRoom
);

router.get('/:eventId', verifyEventByParams, livingRoomCtrl.livingRoomsByEvent);

router.delete(
    '/:livingRoomId',
    [verifyToken, isModelator, verifyLivingRoomByParams],
    livingRoomCtrl.deleteLivingRoom
);

export default router;
