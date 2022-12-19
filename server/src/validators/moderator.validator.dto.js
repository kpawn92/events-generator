import { ModeratorSchema } from '../models/schema/index.js';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import Ajv from 'ajv';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv, ['email']).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateModeratorSchema = ajv.compile(ModeratorSchema);

const validateModeratorDTO = (req, res, next) => {
    const isDTOValid = validateModeratorSchema(req.body);
    if (!isDTOValid)
        return res.status(403).json({
            message: ajv.errorsText(validateModeratorSchema.errors, {
                separator: `, `,
            }),
        });
    next();
};

export { validateModeratorDTO };
