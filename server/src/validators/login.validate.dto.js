import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import Ajv from 'ajv';
import { LoginSchema } from '../models/schema';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv, ['email']).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateLoginSchema = ajv.compile(LoginSchema);

const validateLoginDTO = (req, res, next) => {
    const isDTOValid = validateLoginSchema(req.body);
    if (!isDTOValid)
        return res.status(403).json({
            message: ajv.errorsText(validateLoginSchema.errors, {
                separator: `, `,
            }),
        });
    next();
};

export { validateLoginDTO };
