import { Router } from 'express';
import * as eventCtrl from '../controllers/event.controller';
import { isEconomist, isModelator, verifyToken } from '../middlewares/authJwt';
import { validateEventDTO } from '../validators/event.validate.dto';
import { cacheInit } from '../middlewares/turboCache';
import { verifyEventByParams } from '../middlewares/verifyParams';

const router = Router();

// TODO: Todos los usuarios obtienen los eventos y su descripcion a travez del ID del event
/**
 * @coment : Moderator crea el event (verificacion de token y rol)
 * @coment : Moderator actualiza el event (verificacion de token y rol)
 * @coment : Economist actualiza el costo de los events (verificacion idEvent, token y rol)
 */

router.get('/', cacheInit, eventCtrl.getEvents);

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

router.put(
    '/cost/:eventId',
    [verifyToken, isEconomist],
    eventCtrl.setCostEvent
);

export default router;
