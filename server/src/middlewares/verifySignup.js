import jwt from 'jsonwebtoken';
import {
    KEY_HEADER_ADMIN,
    KEY_SECRET,
    KEY_TOKEN_HEADER,
    VOID_KEY_HEADER_ADMIN,
    KEY_HEADER_MODERATOR,
    VOID_KEY_HEADER_MODERATOR,
} from '../config/env';
import { validateModeratorDTO } from '../validators/moderator.validator.dto';
import { validateSubscriberDTO } from '../validators/subscriber.validate.dto';
import { User } from '../models/entity';

const verifyHeaders = async (header, key, void_key, id) => {
    const headerUserAdvanced = header[key];
    if (headerUserAdvanced !== void_key) return;

    const role = await User.getRolById(id);
    if (!role) return;

    const rol_name = role.rol_name;
    return rol_name;
};

export const verifyData = async (req, res, next) => {
    try {
        const { role } = req.body;
        if (role) {
            const token = req.headers[KEY_TOKEN_HEADER];
            if (!token)
                return res.status(404).json({ message: 'Token not found' });

            const decoded = jwt.verify(token, KEY_SECRET);

            if (role === 'moderator' || role === 'economist') {
                const rol_name = await verifyHeaders(
                    req.headers,
                    KEY_HEADER_ADMIN,
                    VOID_KEY_HEADER_ADMIN,
                    decoded.id
                );
                if (!rol_name)
                    return res
                        .status(404)
                        .json({ message: 'Header not found' });

                if (rol_name !== 'admin')
                    return res.status(401).json({ message: 'Unauthorized' });
            }
            if (role === 'manager') {
                const rol_name = await verifyHeaders(
                    req.headers,
                    KEY_HEADER_MODERATOR,
                    VOID_KEY_HEADER_MODERATOR,
                    decoded.id
                );
                if (!rol_name)
                    return res
                        .status(404)
                        .json({ message: 'Header not found' });

                if (rol_name !== 'moderator')
                    return res.status(401).json({ message: 'Unauthorized' });
            }
            return validateModeratorDTO(req, res, next);
        }
        return validateSubscriberDTO(req, res, next);
    } catch (error) {
        return res.status(500).json({ message: 'Error body: ' + error });
    }
};
