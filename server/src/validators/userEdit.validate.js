import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import Ajv from 'ajv';
import { EditUserSchema } from '../models/schema';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv, ['email']).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateEditUserSchema = ajv.compile(EditUserSchema);

const validateEditUserDTO = (req, res, next) => {
    const isDTOValid = validateEditUserSchema(req.body);
    if (!isDTOValid)
        return res.status(403).json({
            message: ajv.errorsText(validateEditUserSchema.errors, {
                separator: `, `,
            }),
        });
    next();
};

export { validateEditUserDTO };
