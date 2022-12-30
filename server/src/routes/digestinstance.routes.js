import { Router } from 'express';
import { verifyToken, isUser, isModelator } from '../middlewares/authJwt';
import { verifyInstance } from '../middlewares/verifyParams';
import * as digestInstanceCtrl from '../controllers/digestinstance.controller';
const router = Router();

// TODO: Gestionar las instancias de los resumenes de trabajos mandados
/**
 * @swagger
 *  tags:
 *      name: DigestInstance
 *      description: Endpoints para manejar informacion relacionada con las instancias de resumen de los trabajos previos al evento
 */

/**
 * @swagger
 *  components:
 *      parameters:
 *          InstanceId:
 *              name: instanceId
 *              in: path
 *              description: id de la instancia
 *              required: true
 *      schemas:
 *          BodyAbstractPost:
 *              type: object
 *              properties:
 *                  abstract:
 *                      type: string
 */

/**
 * @swagger
 *  /digest-instance/:
 *      post:
 *          tags:
 *          - DigestInstance
 *          summary: El subscriber genera la instancia de resumen del trabajo a presentar
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BodyAbstractPost'
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

router.post('/', [verifyToken, isUser], digestInstanceCtrl.setDigestInstance);

/**
 * @swagger
 *  /digest-instance/abstract:
 *      get:
 *          tags:
 *          - DigestInstance
 *          summary: El subscriber obtiene todos los status de instancias de los resumenes que llego a crear
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
    '/abstract',
    [verifyToken, isUser],
    digestInstanceCtrl.getStatusByIdSubs
);

/**
 * @swagger
 *  /digest-instance/:
 *      get:
 *          tags:
 *          - DigestInstance
 *          summary: El modelator obtiene todas instancias de los resumenes para generarle validez
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
    '/',
    [verifyToken, isModelator],
    digestInstanceCtrl.getDigestInstances
);

/**
 * @swagger
 *  /digest-instance/{instanceId}:
 *      put:
 *          tags:
 *          - DigestInstance
 *          summary: El modelator actualiza el estado de las instancias
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          - $ref: '#/components/parameters/InstanceId'
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

router.put(
    '/:instanceId',
    [verifyToken, isModelator, verifyInstance],
    digestInstanceCtrl.updateStateById
);
export default router;
