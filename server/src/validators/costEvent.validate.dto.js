import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import Ajv from 'ajv';
import { CostEventSchema } from '../models/schema';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateCostEventSchema = ajv.compile(CostEventSchema);

const validateCostEventDTO = (req, res, next) => {
    const isDTOValid = validateCostEventSchema(req.body);
    if (!isDTOValid)
        return res.status(403).json({
            message: ajv.errorsText(validateCostEventSchema.errors, {
                separator: `, `,
            }),
        });
    next();
};

export { validateCostEventDTO };
