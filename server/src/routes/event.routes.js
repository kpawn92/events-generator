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
 *      description: Endpoints para manejar los eventos en la BD
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
 *      schemas:
 *          BodyCostEvent:
 *              type: object
 *              properties:
 *                  cost:
 *                      description: Cantidad a pagar para participar en el evento
 *                      type: number
 *                  target:
 *                      description: Numero de targeta para recibir el pago
 *                      type: string
 *          BodyEventsPost:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  description:
 *                      type: string
 *                  date_beginning_inscription:
 *                      description: fecha de inicio de inscripcion al evento
 *                      type: number
 *                  end_date_inscription:
 *                      description: fecha final de inscripcion del evento
 *                      type: number
 *                  date_beginning:
 *                      description: fecha inicio del evento
 *                      type: number
 *                  end_date:
 *                      description: fecha final del evento
 *                      type: number
 *              example:
 *                  name: Ciencia y tecnica
 *                  description: A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opp
 *                  date_beginning_inscription: 1671577145
 *                  end_date_inscription: 1671577145
 *                  date_beginning: 1671577145
 *                  end_date: 1671577145
 */

/**
 * @swagger
 *  /events/:
 *      get:
 *          tags:
 *          - Events
 *          summary: Los usuarios obtienen los eventos activos, solo el economist y el moderator obtienen todos los eventos activos e inactivos
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
 *          summary: Todos los usuarios obtienen el evento
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

/**
 * @swagger
 *  /events/:
 *      post:
 *          tags:
 *          - Events
 *          summary: El modelator crea los eventos
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BodyEventsPost'
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
    '/',
    [verifyToken, isModelator, validateEventDTO],
    eventCtrl.createEvent
);

/**
 * @swagger
 *  /events/{eventId}:
 *      put:
 *          tags:
 *          - Events
 *          summary: El modelator actualiza el evento
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          - $ref: '#/components/parameters/EventId'
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BodyEventsPost'
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

router.put(
    '/:eventId',
    [verifyToken, isModelator, verifyEventByParams, validateEventDTO],
    eventCtrl.updateEventById
);

/**
 * @swagger
 *  /events/{eventId}:
 *      patch:
 *          tags:
 *          - Events
 *          summary: El economist actualiza el costo del evento
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          - $ref: '#/components/parameters/EventId'
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BodyCostEvent'
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


router.patch(
    '/:eventId',
    [verifyToken, isEconomist, verifyEventByParams, validateCostEventDTO],
    eventCtrl.setCostEvent
);

/**
 * @swagger
 *  /events/{eventId}:
 *      delete:
 *          tags:
 *          - Events
 *          summary: El moderator cancela el evento
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          - $ref: '#/componentes/parameters/EventId'
 *          responses:
 *              200:
 *                  description: Peticion aceptada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              404:
 *                  description: No existe el evento
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

router.delete(
    '/:eventId',
    [verifyToken, isModelator, verifyEventByParams],
    eventCtrl.cancelEventById
);

export default router;
