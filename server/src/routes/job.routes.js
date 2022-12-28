import { Router } from 'express';
import * as jobCtrl from '../controllers/job.controller';
import { multerUpload } from '../middlewares/multer';

const router = Router();

// TODO: Verificar que usuario puede crear (Economist, Moderator, Manager) a traves del role
/**
 * @coment : Admin create Moderator and Economist (verificacion de header and token)
 */

// router.post('/upload', jobCtrl.createItem);
router.post('/upload', multerUpload.single('file'), jobCtrl.uploadFile);

export default router;
