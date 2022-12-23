import { v4 } from 'uuid';
import { pool } from '../../../config/db';

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

export const getManagerById = async (id) => {
    const [result] = await pool.query('SELECT * FROM manager WHERE id = ?', [
        id,
    ]);
    return result;
};

export const getManagers = async (status) => {
    const [result] = await pool.query(
        'SELECT name, lastname, dni, email FROM manager JOIN users ON users.id = fk_user WHERE status = ?',
        [status]
    );
    return result;
};
