import { Event, User } from '../models/entity';

export const verifyUserByParams = async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.getUserById(userId);
    if (user.length === 0)
        return res.status(404).json({ message: 'User not found' });
    next();
};

export const verifyEventByParams = async (req, res, next) => {
    const { eventId } = req.params;
    const id = await Event.getEventById(eventId);
    if (id.length === 0)
        return res.status(404).json({ message: 'Event not found' });
    next();
};
