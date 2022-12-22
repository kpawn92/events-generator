import jwt from 'jsonwebtoken';
import { KEY_SECRET, KEY_TOKEN_HEADER } from '../config/env';
import { User } from '../models/entity';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers[KEY_TOKEN_HEADER];

        if (!token)
            return res.status(403).json({ message: 'No token provided' });

        const decoded = jwt.verify(token, KEY_SECRET);

        req.userId = decoded.id;

        const rol_token = await User.getRolById(decoded.id);
        if (!rol_token)
            return res.status(404).json({ message: 'Expired token' });

        const { rol_name } = rol_token;
        req.userRol = rol_name;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized, ' + error });
    }
};

export const isUser = async (req, res, next) => {
    if (req.userRol === 'user') return next();
    return res.status(403).json({ message: 'Require User role' });
};

export const isModelator = async (req, res, next) => {
    if (req.userRol === 'moderator') return next();
    return res.status(403).json({ message: 'Require Moderator role' });
};

export const isAdmin = (req, res, next) => {
    if (req.userRol === 'admin') return next();
    return res.status(403).json({ message: 'Requer Admin role' });
};

export const isEconomist = (req, res, next) => {
    if (req.userRol === 'economist') return next();
    return res.status(403).json({ message: 'Requer economist role' });
};

export const isManager = (req, res, next) => {
    if (req.userRol === 'manager') return next();
    return res.status(403).json({ message: 'Requer manager role' });
};
