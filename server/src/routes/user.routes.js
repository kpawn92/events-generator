import { Router } from 'express';
import * as userCtrl from '../controllers/user.controller.js';
import { isAdmin, verifyToken } from '../middlewares/authJwt.js';
import { validateEditUserDTO } from '../validators/userEdit.validate.js'
import { verifyUserAndEmailById } from '../middlewares/verifyEmail.js';

const router = Router();

// TODO: Admin obtendra todos los usuarios registrados por HTTP:GET
/**
 * @coment : Admin envia por el body {email, password} se verifica por token/middleware que es admin y que el email es valido
 * @coment : Admin obtiene, edita/elimina a todos los usuarios del sistema (verificacion de header and token) PUT
 */

router.get('/', [verifyToken, isAdmin], userCtrl.users);
router.get('/:userId', [verifyToken, isAdmin], userCtrl.user);

router.put(
    '/:userId',
    [verifyToken, isAdmin, validateEditUserDTO, verifyUserAndEmailById],
    userCtrl.editUserById
);

export default router;
