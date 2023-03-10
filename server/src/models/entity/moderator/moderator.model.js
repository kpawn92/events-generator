import { v4 } from 'uuid';
import { pool } from '../../../config/db';

export const create = async (id, body) => {
    const _id = v4();
    const { name, lastname, dni } = body;
    const [moderator] = await pool.query('INSERT INTO moderator SET ?', {
        id: _id,
        name,
        lastname,
        dni,
        fk_user: id,
    });

    return moderator;
};

export const setUser = async (dni) => {
    const [result] = await pool.query(
        'SELECT dni FROM moderator WHERE dni = ?',
        [dni]
    );
    return result;
};

export const getModerators = async (status) => {
    const [result] = await pool.query(
        'SELECT name, lastname, dni, email FROM moderator JOIN users ON users.id = fk_user WHERE status = ?',
        [status]
    );
    return result;
};
