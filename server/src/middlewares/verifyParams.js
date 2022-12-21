import { User } from '../models/entity';

export const verifyUserByParams = async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.getUserById(userId);
    if (user.length === 0)
        return res.status(404).json({ message: 'User not found' });
    next();
};
