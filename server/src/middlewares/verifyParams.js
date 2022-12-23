import { Event, User, LivingRoom } from '../models/entity';
import { KEY_HEADER_MODERATOR, VOID_KEY_HEADER_MODERATOR } from '../config/env';

export const verifyUserByParams = async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.getUserById(userId);
    if (user.length === 0)
        return res.status(404).json({ message: 'User not found' });
    next();
};

export const verifyEventByParams = async (req, res, next) => {
    const { eventId } = req.params;
    const id = await Event.getById(eventId);
    if (id.length === 0)
        return res.status(404).json({ message: 'Event not found' });
    next();
};

export const verifyLivingRoomByParams = async (req, res, next) => {
    const { livingRoomId } = req.params;
    const id = await LivingRoom.getElementById(livingRoomId);
    if (id.length === 0)
        return res.status(404).json({ message: 'Living Room not found' });
    next();
};

export const verifyHeaderModeratorOrEconomist = async (req, res, next) => {
    try {
        const header = req.headers[KEY_HEADER_MODERATOR];
        if (header !== VOID_KEY_HEADER_MODERATOR) return next();
        const events = await Event.events();
        return res.status(200).json(events);
    } catch (error) {
        return res.status(500).json({ message: 'Error server, ' + error });
    }
};
