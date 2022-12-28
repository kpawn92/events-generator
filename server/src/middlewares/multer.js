import multer from 'multer';
import { extname, join } from 'path';

const MIMETYPE = ['application/pdf'];

const multerUpload = multer({
    storage: multer.diskStorage({
        destination: join(__dirname, '../../uploads'),
        filename: (req, file, cb) => {
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];
            cb(null, `${fileName}-${Date.now()}${fileExtension}`);
        },
    }),
    fileFilter: (req, file, cb) => {
        if (MIMETYPE.includes(file.mimetype)) cb(null, true);
        else cb(new Error(`Only ${MIMETYPE.join('')} mimetype not supported`));
    },
    limits: {
        fieldSize: 10000000,
    },
});

export { multerUpload };
