import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import Ajv from 'ajv';
import { LivingRoomSchema } from '../models/schema';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateLivingRoomSchema = ajv.compile(LivingRoomSchema);

const validateLivingRoomDTO = (req, res, next) => {
    const isDTOValid = validateLivingRoomSchema(req.body);
    if (!isDTOValid)
        return res.status(403).json({
            message: ajv.errorsText(validateLivingRoomSchema.errors, {
                separator: `, `,
            }),
        });
    next();
};

export { validateLivingRoomDTO };
