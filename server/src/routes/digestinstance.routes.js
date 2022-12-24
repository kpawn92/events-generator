import { Router } from 'express';
import { validateDigestInstanceDTO } from '../validators/digestinstance.validate.dto'
import * as digestInstanceCtrl from '../controllers/digestinstance.controller'
const router = Router();

// TODO: Gestionar las instancias de los resumenes de trabajos mandados
/**
 * @coment : Subscriber crea las instancia.
 * @coment : Subscriber obtiene el estado de las instancias creadas para verificar su validez.
 * @coment : Moderator revisa los resumenes y edita el estado de las instancias para confirmar su validez.
 * @coment : Las instancias solo seran almancenadas en la base de datos en un periodo vigente de 5 dias.
 */

router.post('/', validateDigestInstanceDTO, digestInstanceCtrl.setDigestInsntance)
router.get('/:subsId', digestInstanceCtrl.getStatusByIdSubs)
router.get('/', digestInstanceCtrl.getDigestInsntances)
router.put('/:instanceId', digestInstanceCtrl.updateStateById)
export default router;