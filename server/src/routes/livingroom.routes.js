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
 *      name: LivingRoom
 *      description: Endpoint para manejar informacion relacionada con las salas donde se efectuaran los eventos
 */

/**
 * @swagger
 *  components:
 *      parameters:
 *          LivingRoomId:
 *              in: path
 *              name: livingRoomId
 *              descriiption: Id de la sala
 *              required: true
 *              schema:
 *                  type: string
 *      schemas:
 *          BodyLivingPost:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  description:
 *                      type: string
 *                  fk_manager:
 *                      description: id del manager
 *                      type: string
 */

/**
 * @swagger
 *  /living-room/{eventId}:
 *      post:
 *          tags:
 *          - LivingRoom
 *          summary: El modelator crea las salas de cada evento
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          - $ref: '#/components/parameters/EventId'
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BodyLivingPost'
 *          required: true
 *          responses:
 *              200:
 *                  description: Peticion realizada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              403:
 *                  description: Error en el body
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              404:
 *                  description: El evento ya existe
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              500:
 *                  description:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
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

/**
 * @swagger
 *  /living-room/{eventId}:
 *      get:
 *          tags:
 *          - LivingRoom
 *          summary: Todos los usuarios obtienen las salas del evento pasado en el parametro
 *          parameters:
 *          - $ref: '#/components/parameters/EventId'
 *          responses:
 *              200:
 *                  description: Peticion realizada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              403:
 *                  description: Error en el body
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              404:
 *                  description: El evento ya existe
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              500:
 *                  description:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 */

router.get('/:eventId', verifyEventByParams, livingRoomCtrl.livingRoomsByEvent);

/**
 * @swagger
 *  /living-room/{livingRoomId}:
 *      delete:
 *          tags:
 *          - LivingRoom
 *          summary: El modelator borra/elimina el registro de la sala
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          - $ref: '#/components/parameters/LivingRoomId'
 *          responses:
 *              200:
 *                  description: Peticion realizada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              403:
 *                  description: Error en el body
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              404:
 *                  description: El evento ya existe
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              500:
 *                  description:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 */

router.delete(
    '/:livingRoomId',
    [verifyToken, isModelator, verifyLivingRoomByParams],
    livingRoomCtrl.deleteLivingRoom
);

export default router;
