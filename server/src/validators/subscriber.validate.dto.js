import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import Ajv from 'ajv';
import { SubscriberSchema } from '../models/schema';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv, ['email']).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateSubscriberSchema = ajv.compile(SubscriberSchema);

const validateSubscriberDTO = (req, res, next) => {
    const isDTOValid = validateSubscriberSchema(req.body);
    if (!isDTOValid)
        return res.status(403).json({
            message: ajv.errorsText(validateSubscriberSchema.errors, {
                separator: `, `,
            }),
        });
    next();
};

export { validateSubscriberDTO };
