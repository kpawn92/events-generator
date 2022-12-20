import { Router } from 'express';
import * as eventCtrl from '../controllers/event.controller.js'
import { isModelator, verifyToken } from '../middlewares/authJwt.js'

const router = Router();


// TODO: Todos los usuarios obtienen los eventos y su descripcion a travez del ID del event
/**
 * @coment : Moderator crea el event (verificacion de token y rol)
 * @coment : Moderator actualiza el event (verificacion de token y rol)
 * @coment : Creating Subscribers sera free, a travez de una url sin headers and sin roles
 */

router.get('/', eventCtrl.getEvents)
router.get('/:eventId', eventCtrl.getEventById)
router.post('/', [verifyToken, isModelator], eventCtrl.createEvent)
router.put('/:eventId', [verifyToken, isModelator], eventCtrl.updateEventsById)

export default router;