import { Router } from 'express';
import * as jobCtrl from '../controllers/job.controller';
import { multerUpload } from '../middlewares/multer';
import { verifyToken, isUser, isManager } from '../middlewares/authJwt';

const router = Router();

// TODO: Gestionar los trabajos aceptado a los eventos
// TODO: El subscriber guarde el id de la instancia de resumen aceptada
// TODO: Que los usuarios guarden el link de presentacion


/**
 * @swagger
 *  tags:
 *      name: Job
 *      description: Endpoints para manejar los trabajos a presentar en los eventos
 */

/**
 * @swagger
 *  components:
 *      parameters:
 *          Upload:
 *              in: formData
 *              name: file
 *              type: file
 *              description: Solo se permite formato PDF
 *      schemas:
 *          BodyJobPost:
 *              type: object
 *              properties:
 *                  link_presentation:
 *                      type: string
 *              example:
 *                  link_presentation: http://localhost:4000/docs/
 */

router.post(
    '/upload',
    [verifyToken, isUser],
    multerUpload.single('file'),
    jobCtrl.uploadFile
);

/**
 * @swagger
 *  /job/all:
 *      get:
 *          tags:
 *          - Job
 *          summary: El subscriber obtiene todos los nombres de los trabajos guardados para obtener el link del trabajo
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          responses:
 *              200:
 *                  description: Peticion realizada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              404:
 *                  description: No se encuentra
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

router.get('/all', [verifyToken, isUser], jobCtrl.getJobsBySubs);

/**
 * @swagger
 *  /job/:
 *      get:
 *          tags:
 *          - Job
 *          summary: El manager obtiene todos los trabajos
 *          parameters:
 *          - $ref: '#/components/parameters/token'
 *          responses:
 *              200:
 *                  description: Peticion realizada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              404:
 *                  description: No se encuentra
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

router.get('/', [verifyToken, isManager], jobCtrl.getJobs);

router.patch('/', [verifyToken, isUser], jobCtrl.update);

export default router;
