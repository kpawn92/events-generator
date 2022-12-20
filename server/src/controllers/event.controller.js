import { Event } from '../models/entity/index.js';

export const createEvent = async (req, res) => {
    try {
        const { name } = req.body;
        const nameEvent = await Event.getEventByName(name);
        if (nameEvent.length > 0)
            return res.status(404).json({ message: 'Event already exists' });

        const event = await Event.createEvents(req.body);
        res.status(200).json(event);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating: ' + error });
    }
};

export const getEvents = async (req, res) => {
    res.send('geting events');
};

export const getEventById = async (req, res) => {
    res.send('get event');
};

export const updateEventsById = async (req, res) => {
    res.send('updating event');
};

export const setCostEvent = async (req, res) => {
    res.send('setting event cost');
};
