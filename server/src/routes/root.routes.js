import { Router } from 'express';
import * as subsCtrl from '../controllers/subscribers.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
    '/',
    [authJwt.verifyToken, authJwt.isModelator],
    subsCtrl.createSubscription
);
router.get(
    '/subs',
    [authJwt.verifyToken, authJwt.isAdmin],
    subsCtrl.getSubscription
);
router.get('/:subsId', subsCtrl.getSubscriptionById);
router.put(
    '/:subsId',
    [authJwt.verifyToken, authJwt.isModelator],
    subsCtrl.updateSubscriptionById
);
router.delete(
    '/:subsId',
    [authJwt.verifyToken, authJwt.isAdmin],
    subsCtrl.deleteSubscriptionById
);

export default router;
