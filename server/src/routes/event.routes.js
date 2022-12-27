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
 * @coment : Moderator and Economist obtienen todos los eventos (verificacion headers-moderator)
 * @coment : Los usuarios solo obtendran los eventos validos
 * @coment : Moderator crea el event (verificacion de token y rol)
 * @coment : Moderator edita/invalida el event (verificacion de token y rol)
 * @coment : Economist actualiza el costo y #tarjeta de los events (verificacion de token y rol)
 * @coment : Moderator cancela el event (verificacion de token , rol, params)
 */

router.get(
    '/',
    [verifyHeaderModeratorOrEconomist, cacheInit],
    eventCtrl.getEvents
);

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
