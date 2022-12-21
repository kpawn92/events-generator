import { v4 } from 'uuid';
import { pool } from '../../../config/db';

export const createEvents = async ({
    name,
    description,
    date_beginning_inscription,
    end_date_inscription,
    date_beginning,
    end_date,
}) => {
    const id = v4();
    const [event] = await pool.query('INSERT INTO event SET ?', {
        id,
        name,
        description,
        date_beginning_inscription,
        end_date_inscription,
        date_beginning,
        end_date,
    });
    return event;
};

export const getEventByName = async (name) => {
    const [result] = await pool.query('SELECT name FROM event WHERE name = ?', [
        name,
    ]);
    return result;
};

export const getEvents = async (status) => {
    const [result] = await pool.query('SELECT * FROM event WHERE status = ?', [
        status,
    ]);
    return result;
};
export const getEventById = async (id) => {
    const [result] = await pool.query('SELECT * FROM event WHERE id = ?', [id]);
    return result;
};
export const updateEventById = async () => {};
export const cancelEventById = async () => {};
