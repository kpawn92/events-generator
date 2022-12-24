import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import Ajv from 'ajv';
import { DigesInstanceSchema } from '../models/schema';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateDigesInstanceSchema = ajv.compile(DigesInstanceSchema);

const validateDigestInstanceDTO = (req, res, next) => {
    const isDTOValid = validateDigesInstanceSchema(req.body);
    if (!isDTOValid)
        return res.status(403).json({
            message: ajv.errorsText(validateDigesInstanceSchema.errors, {
                separator: `, `,
            }),
        });
    next();
};

export { validateDigestInstanceDTO };