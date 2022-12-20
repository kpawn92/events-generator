import { Router } from 'express';
import * as eventCtrl from '../controllers/event.controller.js'
import { isModelator, verifyToken } from '../middlewares/authJwt.js'

const router = Router();

router.get('/', eventCtrl.getEvents)
router.get('/:eventId', eventCtrl.getEventById)
router.post('/', [verifyToken, isModelator], eventCtrl.createEvent)
router.put('/:eventId', [verifyToken, isModelator], eventCtrl.updateEventsById)

export default router;