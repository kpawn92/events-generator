import { Router } from 'express';
import * as paymentCtrl from '../controllers/payment.controller'

const router = Router();

/**
 * @coment : Subscriber crea la instancia de pago
 * @coment : Economist obtiene todas las instancias de pago
 * @coment : Economist valida las instancias
 */

//TODO: Validar las rutas
router.post('/', paymentCtrl.createPayment)
router.get('/', paymentCtrl.getPaymentsByState)
router.post('/:paymentId', paymentCtrl.updateState)

export default router;