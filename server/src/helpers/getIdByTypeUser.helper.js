import { User } from '../models/entity'


export const getIdByType = async (req, res) => {
    const query = await User.userByIdAccess('subscriber', req.userId);
    if (query.length === 0)
        return res.status(404).json({ message: 'Subscriber not found' });
    const { id } = query[0];
    return id
};