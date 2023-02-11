import { Router } from 'express';
import * as paymentCtrl from '../controllers/payment.controller';
import { verifyToken, isUser, isEconomist } from '../middlewares/authJwt';
import { verifyPayment } from '../middlewares/verifyFkBody';

const router = Router();

/**
 * @swagger
 *  tags:
 *      name: Payment
 *      description: Endpoints para manejar informacion relacionada con las instancias de pago
 */

/**
 * @swagger
 *  components:
 *      parameters:
 *          PaymentId:
 *              name: paymentId
 *              in: path
 *              description: id del pago
 *              required: true
 *      schemas:
 *          BodyTransactionPost:
 *              type: object
 *              properties:
 *                  transaction:
 *                      type: string
 *                  fk_digestInstance:
 *                      type: string
 */

/**
 * @swagger
 * /payment-instance/:
 *      post:
 *          tags:
 *          - Payment
 *          summary: El subscriber genera la instancia de pago
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BodyTransactionPost'
 *          required: true
 *          responses:
 *              200:
 *                  description: peticion aceptada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              403:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              401:
 *                  description: usuario invalid
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *
 */

router.post(
    '/',
    [verifyToken, isUser, verifyPayment],
    paymentCtrl.createPayment
);

/**
 * @swagger
 *  /payment-instance/get/state:
 *      get:
 *          tags:
 *          - Payment
 *          summary: El subscriber obtiene los estado de sus transacciones
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          responses:
 *              200:
 *                  description: peticion aceptada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              403:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              401:
 *                  description: usuario invalid
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *
 */

router.get(
    '/get/state',
    [verifyToken, isUser],
    paymentCtrl.getPaymentBySubscriber
);

/**
 * @swagger
 *  /payment-instance/:
 *      get:
 *          tags:
 *          - Payment
 *          summary: El economist obtiene todos los estado de las transacciones
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          responses:
 *              200:
 *                  description: peticion aceptada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              403:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              401:
 *                  description: usuario invalid
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *
 */

router.get('/', [verifyToken, isEconomist], paymentCtrl.getPaymentsByState);

/**
 * @swagger
 *  /payment-instance/{paymentId}:
 *      put:
 *          tags:
 *          - Payment
 *          summary: El economist actualiza los estado de las transacciones
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          - $ref: '#/components/parameters/PaymentId'
 *          responses:
 *              200:
 *                  description: peticion aceptada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              403:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              401:
 *                  description: usuario invalid
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *
 */

router.put('/:paymentId', [verifyToken, isEconomist], paymentCtrl.updateState);

export default router;
