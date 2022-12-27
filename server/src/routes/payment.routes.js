import { Router } from 'express';
import * as paymentCtrl from '../controllers/payment.controller';
import { verifyToken, isUser, isEconomist } from '../middlewares/authJwt';
import { validatePaymentDTO } from '../validators/payment.validate.dto';
import { verifyPayment } from '../middlewares/verifyFkBody';

const router = Router();

/**
 * @coment : Subscriber crea la instancia de pago
 * @coment : Subscriber obiene el state de las instancias de pago
 * @coment : Economist obtiene todas las instancias de pago
 * @coment : Economist valida la instancia
 */

//TODO: Validar las rutas
//TODO: El el metodo post validar que no se repitan los datos y verficiacion de token y rol
router.post(
    '/',
    [verifyToken, isUser, validatePaymentDTO, verifyPayment],
    paymentCtrl.createPayment
);
router.get('/state', [verifyToken, isUser], paymentCtrl.getPaymentBySubscriber);
router.get('/', [verifyToken, isEconomist], paymentCtrl.getPaymentsByState);
router.post('/:paymentId', [verifyToken, isEconomist], paymentCtrl.updateState);

export default router;
