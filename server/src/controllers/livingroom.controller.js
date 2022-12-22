import { LivingRoom } from '../models/entity';

export const createLivingRoom = async (req, res) => {
    try {
        const { eventId } = req.params;
        const livingRoom = await LivingRoom.create(req.body, eventId);
        res.status(200).json(livingRoom);
    } catch (error) {
        return res.status(500).json({ message: 'Error server: ' + error });
    }
};

export const livingRoomsByEvent = async (req, res) => {
    try {
        const { eventId } = req.params
        const livingRooms = await LivingRoom.getlivingroomsByEventId(eventId)
        res.status(200).json(livingRooms)
    } catch (error) {
        return res.status(500).json({ message: 'Error server: ' + error });
    }
};
