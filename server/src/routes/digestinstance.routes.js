import { Router } from 'express';
import * as digestInstanceCtrl from '../controllers/digestinstance.controller'
const router = Router();

// TODO: Gestionar las instancias de los resumenes de trabajos mandados
/**
 * @coment : Subscriber obtiene las instancias creadas para verificar su validez.
 * @coment : Subscriber crea las instancias.
 */

router.get('/', digestInstanceCtrl.getDigestInsntances)
router.post('/', digestInstanceCtrl.setDigestInsntance)

export default router;