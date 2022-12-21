import { Router } from 'express';
import { verifyData } from '../middlewares/verifySignup.js';
import { validateLoginDTO } from '../validators/login.validate.dto.js';
import { verifyEmail } from '../middlewares/verifyEmail.js';
import * as authCtrl from '../controllers/auth.controller.js';

const router = Router();

// TODO: Verificar que usuario puede crear (Economist, Moderator, Manager) a traves del role
/**
 * @coment : Admin create Moderator and Economist (verificacion de header and token)
 * @coment : Moderator create Manager (verificacion de header and token)
 * @coment : Creating Subscribers sera free, a travez de una url sin headers and sin roles
 * @coment : El Moderator, Manager como el Economist tambien puede poseer cuentas Subscribers con diferentes emails
 */

router.post('/signup', [verifyData, verifyEmail], authCtrl.signUp); // Created user

router.post('/signin', validateLoginDTO, authCtrl.signIn); // Login user

export default router;
