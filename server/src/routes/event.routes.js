import { Router } from 'express';
import * as eventCtrl from '../controllers/event.controller';
import { isEconomist, isModelator, verifyToken } from '../middlewares/authJwt';
import { validateEventDTO } from '../validators/event.validate.dto';
import { validateCostEventDTO } from '../validators/costEvent.validate.dto';
import { cacheInit } from '../middlewares/turboCache';
import {
    verifyEventByParams,
    verifyHeaderModeratorOrEconomist,
} from '../middlewares/verifyParams';

const router = Router();

// TODO: Todos los usuarios obtienen los eventos y su descripcion

/**
 * @swagger
 *  tags:
 *      name: Events
 *      description: Endpoint para manejar los eventos en la BD
 */

/**
 * @swagger
 *  components:
 *      parameters:
 *          EventId:
 *              in: path
 *              name: eventId
 *              required: true
 *              schema:
 *                  type: string
 *              description: id del registro ha obtener
 */

/**
 * @swagger
 *  /events/:
 *      get:
 *          tags:
 *          - Events
 *          summary: Obtener los eventos activos, solo el economist y el moderator obtienen todos los eventos activos e inactivos
 *          parameters:
 *          - $ref: '#/components/parameters/headUA'
 *          responses:
 *              200:
 *                  description: Peticion realizada satisfactoriamente
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              500:
 *                  description: Error al server
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 */

router.get(
    '/',
    [verifyHeaderModeratorOrEconomist, cacheInit],
    eventCtrl.getEvents
);

/**
 * @swagger
 *  /events/{eventId}:
 *      get:
 *          tags:
 *          - Events
 *          summary: Obtiene el evento a travez del ID pasado por parametro
 *          parameters:
 *          - $ref: '#components/parameters/EventId'
 *          responses:
 *              200:
 *                  description: Peticion realizada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              404:
 *                  description: No se encuentra
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              500:
 *                  description: Err server
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 */

router.get('/:eventId', verifyEventByParams, eventCtrl.getEventById);

router.post(
    '/',
    [verifyToken, isModelator, validateEventDTO],
    eventCtrl.createEvent
);
router.put(
    '/:eventId',
    [verifyToken, isModelator, verifyEventByParams, validateEventDTO],
    eventCtrl.updateEventById
);

router.patch(
    '/:eventId',
    [verifyToken, isEconomist, verifyEventByParams, validateCostEventDTO],
    eventCtrl.setCostEvent
);

router.delete(
    '/:eventId',
    [verifyToken, isModelator, verifyEventByParams],
    eventCtrl.cancelEventById
);

export default router;
