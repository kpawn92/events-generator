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
export const updateEventById = async (id, body) => {
    const {
        name,
        description,
        date_beginning_inscription,
        end_date_inscription,
        date_beginning,
        end_date,
    } = body;
    const [result] = await pool.query(
        'UPDATE event SET name = ?, description = ?, date_beginning_inscription = ?, end_date_inscription = ?, date_beginning = ?, end_date = ?  WHERE id = ?',
        [
            name,
            description,
            date_beginning_inscription,
            end_date_inscription,
            date_beginning,
            end_date,
            id,
        ]
    );
    return result;
};

export const updateCostEventById = async (id, body, status) => {
    const { cost, target } = body;
    const [result] = await pool.query(
        'UPDATE event SET cost = ?, target = ?, status = ? WHERE id = ?',
        [cost, target, status, id]
    );
    return result;
};
export const invalidEventById = async (id, status) => {
    const [result] = await pool.query(
        'UPDATE event SET `status` = ? WHERE id = ?',
        [status, id]
    );
    return result;
};
