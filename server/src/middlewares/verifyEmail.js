import { User, Roles } from '../models/entity/index.js';

const verifyRole = async (req, res, next) => {
    try {
        const { role } = req.body;
        if (role) await Roles.getRoleByName(role);
        next();
    } catch (error) {
        return res
            .status(404)
            .json({ message: 'Error getting role: (invalid), ' + error });
    }
};

export const verifyEmail = async (req, res, next) => {
    const { email } = req.body;
    const _email = await User.getEmailByEmail(email);
    if (_email.length > 0)
        return res.status(404).json({ message: 'Email already exists' });
    await verifyRole(req, res, next);
};

export const verifyUserAndEmailById = async (req, res, next) => {
    const { userId } = req.params;
    const { email, password } = req.body;

    if (password.length === 0)
        return res.status(403).json({ message: 'Password invalid' });

    const users = await User.getUserById(userId);
    if (users.length === 0)
        return res.status(404).json({ message: 'User not found' });

    const emailIndex = users.findIndex((user) => user.email === email);
    if (emailIndex === -1)
        return res.status(403).json({ message: 'Email invalid' });

    next();
};
