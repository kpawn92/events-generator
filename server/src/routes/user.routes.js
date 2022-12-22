import { Router } from 'express';
import * as userCtrl from '../controllers/user.controller';
import { isAdmin, verifyToken } from '../middlewares/authJwt';
import { validateEditUserDTO } from '../validators/userEdit.validate';
import { verifyUserAndEmailById } from '../middlewares/verifyEmail';
import { verifyUserByParams } from '../middlewares/verifyParams';
import { cacheInit } from '../middlewares/turboCache';

const router = Router();

// TODO: Admin obtendra todos los usuarios registrados por HTTP:GET
/**
 * @coment : Admin envia por el body {email, password} se verifica por token/middleware que es admin y que el email es valido
 * @coment : Admin obtiene, edita/invalida a todos los usuarios del sistema (verificacion de token, rol and params, para habilitar cada user solo tiene que actualizar los campos)
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
