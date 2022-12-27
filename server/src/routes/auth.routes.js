import { Router } from 'express';
import { verifyData } from '../middlewares/verifySignup';
import { validateLoginDTO } from '../validators/login.validate.dto';
import { verifyEmail } from '../middlewares/verifyEmail';
import * as authCtrl from '../controllers/auth.controller';

const router = Router();

// TODO: Verificar que usuario puede crear (Economist, Moderator, Manager) a traves del rol

/**
 * @swagger
 * components:
 *  parameters:
 *      token:
 *          in: header
 *          name: x-access-token
 *          description: Token de autenticacion.
 *          required: true
 *  schemas:
 *      HeaderToken:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: Nombre de la cabecera
 *              key:
 *                  type: string
 *                  description: Token generado
 *          example:
 *              token: x-access-token
 *              key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3ZDIyNmEyLWY3YjItNDQ1Yy1iNzRhLTcyOWRlNTcwZDQ4MSIsImlhdCI6MTY3MjE3MzA5NiwiZXhwIjoxNjcyMjU5NDk2fQ.i1n2aDX69brjXJkOrIRHfoU0vKYhI5SZmJCmZ9UYw0M
 *      SignIn:
 *          type: object
 *          properties:
 *              email:
 *                  type: string
 *                  description: Correo del usuario
 *              password:
 *                  type: string
 *                  description: Contraseña del usuario
 *          required:
 *              - email
 *              - password
 *          example:
 *              email: admin@admin.com
 *              password: P@ssw0rd
 *          description: Ejemplo de usuario
 */

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Autenticacion y autorizacion - endpoints
 */


/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *      summary: Requisitos para crear usuario
 *      tags: [Auth]
 *      parameters:
 *         - $ref: '#/components/parameters/token'
 *      requestBody:
 *          description: Acceder al sistema
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/SignIn'
 *      responses:
 *          200:
 *              description: Usuario creado
 */


router.post('/signup', [verifyData, verifyEmail], authCtrl.signUp); // Created user

/**
 * @swagger
 * /api/auth/signin:
 *  post:
 *      summary: Requisitos para acceder al sistema
 *      tags: [Auth]
 *      requestBody:
 *          description: Acceder al sistema
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/SignIn'
 *      responses:
 *          200:
 *              description: Autorizacion aceptada
 *          403:
 *              description: Usuario invalido
 *          401:
 *              description: Contraseña invalida
 */

router.post('/signin', validateLoginDTO, authCtrl.signIn); // Login user

export default router;
