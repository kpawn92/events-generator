import { Router } from 'express';
import * as userCtrl from '../controllers/user.controller.js';
import { isAdmin, verifyToken } from '../middlewares/authJwt.js';
import { validateEditUserDTO } from '../validators/userEdit.validate.js';
import { verifyUserAndEmailById } from '../middlewares/verifyEmail.js';
import { verifyUserByParams } from '../middlewares/verifyParams.js';
import { cacheInit } from '../middlewares/turboCache.js';

const router = Router();

// TODO: Admin obtendra todos los usuarios registrados por HTTP:GET
/**
 * @coment : Admin envia por el body {email, password} se verifica por token/middleware que es admin y que el email es valido
 * @coment : Admin obtiene, edita/elimina a todos los usuarios del sistema (verificacion de header and token) PUT
 */

router.get('/', [verifyToken, isAdmin, cacheInit], userCtrl.users);
router.get('/:userId', [verifyToken, isAdmin], userCtrl.user);

router.put(
    '/:userId',
    [verifyToken, isAdmin, validateEditUserDTO, verifyUserAndEmailById],
    userCtrl.editUserById
);

router.delete(
    '/:userId',
    [verifyToken, isAdmin, verifyUserByParams],
    userCtrl.toInvalidateUser
);

export default router;
