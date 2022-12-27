import { Router } from 'express';
import { validateDigestInstanceDTO } from '../validators/digestinstance.validate.dto';
import { verifyToken, isUser, isModelator } from '../middlewares/authJwt';
import { verifyInstance } from '../middlewares/verifyParams';
import * as digestInstanceCtrl from '../controllers/digestinstance.controller';
const router = Router();

// TODO: Gestionar las instancias de los resumenes de trabajos mandados
/**
 * @coment : Subscriber crea las instancia.
 * @coment : Subscriber obtiene el estado de las instancias creadas para verificar su validez.
 * @coment : Moderator revisa los resumenes y edita el estado de las instancias para confirmar su validez.
 * @coment : Las instancias solo seran almancenadas en la base de datos en un periodo vigente de 5 dias.
 */

router.post(
    '/',
    [verifyToken, isUser, validateDigestInstanceDTO],
    digestInstanceCtrl.setDigestInstance
);
router.get(
    '/abstract',
    [verifyToken, isUser],
    digestInstanceCtrl.getStatusByIdSubs
);
router.get(
    '/',
    [verifyToken, isModelator],
    digestInstanceCtrl.getDigestInstances
);
router.put(
    '/:instanceId',
    [verifyToken, isModelator, verifyInstance],
    digestInstanceCtrl.updateStateById
);
export default router;
