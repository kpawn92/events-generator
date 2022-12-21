import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import Ajv from 'ajv';
import { EventSchema } from '../models/schema';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateEventSchema = ajv.compile(EventSchema);

const validateEventDTO = (req, res, next) => {
    const isDTOValid = validateEventSchema(req.body);
    if (!isDTOValid)
        return res.status(403).json({
            message: ajv.errorsText(validateEventSchema.errors, {
                separator: `, `,
            }),
        });
    next();
};

export { validateEventDTO };
