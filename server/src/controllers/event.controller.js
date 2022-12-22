import { Event } from '../models/entity';

/**
 * Funciones CRUD de la entidad Event
 * @param {Request} req Peticion del cliente
 * @param {Response} res Solucion que brinda el servidor web
 * @returns status de la respuesta del consulta a la base de datos
 */

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
    try {
        const events = await Event.getEvents(1);
        return res.status(200).json(events);
    } catch (error) {
        return res.status(500).json({ message: 'Error server, ' + error });
    }
};

export const getEventById = async (req, res) => {
    try {
        const { eventId } = req.params;
        const event = await Event.getEventById(eventId);
        return res.status(200).json(event);
    } catch (error) {
        return res.status(500).json({ message: 'Error server, ' + error });
    }
};

export const updateEventById = async (req, res) => {
    try {
        const { eventId } = req.params;
        const updateEvent = await Event.updateEventById(eventId, req.body);
        return res.status(200).json(updateEvent);
    } catch (error) {
        return res.status(500).json({ message: 'Error server, ' + error });
    }
};

export const setCostEvent = async (req, res) => {
    try {
        const { eventId } = req.params;
        const updateCostEvent = await Event.updateCostEventById(
            eventId,
            req.body,
            1
        );
        return res.status(200).json(updateCostEvent);
    } catch (error) {
        return res.status(500).json({ message: 'Error server, ' + error });
    }
};

export const cancelEventById = async (req, res) => {
    try {
        const { eventId } = req.params;
        const setCancel = await Event.invalidEventById(eventId, 0);
        res.status(200).json(setCancel);
    } catch (error) {
        return res.status(500).json({ message: 'Error server, ' + error });
    }
};
