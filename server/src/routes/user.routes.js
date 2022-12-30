import { Router } from 'express';
import * as userCtrl from '../controllers/user.controller';
import { isAdmin, isModelator, verifyToken } from '../middlewares/authJwt';
import { validateEditUserDTO } from '../validators/userEdit.validate';
import { verifyUserAndEmailById } from '../middlewares/verifyEmail';
import {
    verifyUserByParams,
    verifyRoleByParams,
} from '../middlewares/verifyParams';
import { cacheInit } from '../middlewares/turboCache';

const router = Router();

// TODO: Admin obtendra todos los usuarios registrados por HTTP:GET

/**
 * @swagger
 *  tags:
 *      name: Users
 *      description: Endpoints para manejar informacion relacionada los usuarios registrados en la BD.
 */

/**
 * @swagger
 *  components:
 *      parameters:
 *          token:
 *              name: x-access-token
 *              in: header
 *              description: token para para obtener los registros
 *              required: true
 *          UserId:
 *              in: path
 *              name: userId
 *              required: true
 *              schema:
 *                  type: string
 *              description: Id del usuario
 *          Role:
 *              in: path
 *              name: role
 *              required: true
 *              schema:
 *                  type: string
 *              description: rol para obtener los usuarios
 */

/**
 * @swagger
 *  /users/:
 *      get:
 *          tags:
 *          - Users
 *          summary: El admin obtiene todos los usuarios
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          responses:
 *              200:
 *                  description: usuarios obtenidos
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              404:
 *                  description: token expired
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              401:
 *                  description: No autorizado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              403:
 *                  description: No contiene token
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 */

router.get('/', [verifyToken, isAdmin, cacheInit], userCtrl.users);
/**
 * @swagger
 *  /users/{userId}:
 *      get:
 *          tags:
 *          - Users
 *          summary: El admin obtiene el usuario
 *          parameters:
 *          - $ref: '#components/parameters/UserId'
 *          - $ref: '#components/parameters/token'
 *          responses:
 *              200:
 *                  description: usuario obtenido satisfactoriamente
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 */
// TODO: __verificar el id que se esta pasando por params y crear el error 500

router.get('/:userId', [verifyToken, isAdmin], userCtrl.user);

/**
 * @swagger
 *  /users/get/{role}:
 *      get:
 *          tags:
 *          - Users
 *          summary: El admin obtiene los usuarios a travez del rol
 *          parameters:
 *          - $ref: '#components/parameters/token'
 *          - $ref: '#components/parameters/Role'
 *          responses:
 *              200:
 *                  description: Usuarios obtenidos satisfactoriamente
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              500:
 *                  description: Error en la respuesta del servidor
 *                  constent:
 *                      application/json:
 *                          schema:
 *                              type: array
 */

router.get(
    '/get/:role',
    [verifyToken, isAdmin, verifyRoleByParams],
    userCtrl.usersByRole
);

/**
 * @swagger
 *  /users/mod/{role}:
 *      get:
 *          tags:
 *          - Users
 *          summary: El modelator obtiene todos los managers y economist
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          - $ref: '#/components/parameters/Role'
 *          responses:
 *              200:
 *                  description: Peticion realizada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              401:
 *                  description: No autorizado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              404:
 *                  description: No existe
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              500:
 *                  description: Err server
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 */

router.get(
    '/mod/:role',
    [verifyToken, isModelator],
    userCtrl.getManagersActived
);

/**
 * @swagger
 *  /users/{userId}:
 *      put:
 *          tags:
 *          - Users
 *          summary: El admin edita el usuario
 *          parameters:
 *          - $ref: '#components/parameters/UserId'
 *          - $ref: '#components/parameters/token'
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/LoginPost'
 *          required: true
 *          responses:
 *              200:
 *                  description: Peticion realizada satisfactoriamente
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              404:
 *                  description: Not found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              403:
 *                  description: Bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              401:
 *                  description: Unauthorised
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              500:
 *                  description: Error server
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 */

router.put(
    '/:userId',
    [verifyToken, isAdmin, validateEditUserDTO, verifyUserAndEmailById],
    userCtrl.editUserById
);

/**
 * @swagger
 *  /users/{userId}:
 *      delete:
 *          tags:
 *          - Users
 *          summary: El admin invalida el usuario
 *          parameters:
 *          - $ref: '#components/parameters/UserId'
 *          - $ref: '#components/parameters/token'
 *          responses:
 *              200:
 *                  description: Peticion aceptada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              404:
 *                  description: No existe el usuario
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              500:
 *                  description: Error en el servidor
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 */

router.delete(
    '/:userId',
    [verifyToken, isAdmin, verifyUserByParams],
    userCtrl.toInvalidateUser
);

export default router;
