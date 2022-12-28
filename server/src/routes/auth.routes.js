import { Router } from 'express';
import { verifyData } from '../middlewares/verifySignup';
import { validateLoginDTO } from '../validators/login.validate.dto';
import { verifyEmail } from '../middlewares/verifyEmail';
import * as authCtrl from '../controllers/auth.controller';

const router = Router();

// TODO: Verificar que usuario puede crear (Economist, Moderator, Manager) a traves del rol

/**
 * @swagger
 *  tags:
 *      name: Auth
 *      description: Endpoint para manejar informacion relacionada con autenticacion y autorizacion de los usuarios
 */

/**
 * @swagger
 *  components:
 *      parameters:
 *          keyToken:
 *              name: x-access-token
 *              in: header
 *              description: token requerido para Admin y Moderators
 *          headSU:
 *              name: super-usuario
 *              in: header
 *              description: key del admin para crear moderator y economist
 *          headUA:
 *              name: usuario-advanced
 *              in: header
 *              description: key del moderator para crear el manager
 *      schemas:
 *          BodyUserAdvancedPost:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  lastname:
 *                      type: string
 *                  dni:
 *                      type: string
 *                  email:
 *                      type: string
 *                  passwword:
 *                      type: string
 *                  role:
 *                      type: string
 *              example:
 *                  name: Jhon
 *                  lastname: Wick
 *                  dni: 90102047481
 *                  email: john@gamil.com
 *                  password: test1234
 *                  role: moderator || economist || manager
 *          BodySubscriberPost:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  lastname:
 *                      type: string
 *                  nation:
 *                      type: string
 *                  dni:
 *                      type: string
 *                  institution:
 *                      type: string
 *                  category:
 *                      type: number
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *          LoginPost:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 */

/**
 * @swagger
 *  /auth/signup:
 *      post:
 *          tags:
 *          - Auth
 *          summary: Autenticacion para acceder al sistema consultando a la BD.
 *          parameters:
 *          - $ref: '#/components/parameters/keyToken'
 *          - $ref: '#/components/parameters/headSU'
 *          - $ref: '#/components/parameters/headUA'
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BodySubscriberPost'
 *          required: true
 *          responses:
 *              200:
 *                  description: usuario creado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              403:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *
 */

router.post('/signup', [verifyData, verifyEmail], authCtrl.signUp); // Created user

/**
 * @swagger
 *  /auth/signin:
 *      post:
 *          tags:
 *          - Auth
 *          summary: Autorizacion para acceder al sistema consultando a la BD.
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/LoginPost'
 *          required: true
 *          responses:
 *              200:
 *                  description: usuario logeado
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

router.post('/signin', validateLoginDTO, authCtrl.signIn); // Login user



export default router;
