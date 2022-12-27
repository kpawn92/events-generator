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
 *  schemas:
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
 *  description: Auth endpoint
 */


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

router.post('/signup', [verifyData, verifyEmail], authCtrl.signUp); // Created user

router.post('/signin', validateLoginDTO, authCtrl.signIn); // Login user

export default router;
