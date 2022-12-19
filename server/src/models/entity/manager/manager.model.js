import { pool } from '../../../config/db.js';
import { v4 } from 'uuid';

export const create = async (id, body) => {
    const _id = v4();
    const { name, lastname, dni } = body;
    const [manager] = await pool.query('INSERT INTO manager SET ?', {
        id: _id,
        name,
        lastname,
        dni,
        fk_user: id,
    });

    return manager;
};

export const setUser = async (dni) => {
    const [result] = await pool.query('SELECT dni FROM manager WHERE dni = ?', [
        dni,
    ]);
    return result;
};
