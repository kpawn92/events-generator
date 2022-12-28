import { v4 } from 'uuid';
import { pool } from '../../../config/db';

export const create = async (id, body) => {
    const _id = v4();
    const { name, lastname, dni } = body;
    const [economist] = await pool.query('INSERT INTO economist SET ?', {
        id: _id,
        name,
        lastname,
        dni,
        fk_user: id,
    });

    return economist;
};

export const setUser = async (dni) => {
    const [result] = await pool.query(
        'SELECT dni FROM economist WHERE dni = ?',
        [dni]
    );
    return result;
};

export const getEconomists = async (status) => {
    const [result] = await pool.query(
        'SELECT economist.id, name, lastname, dni, email FROM economist JOIN users ON users.id = fk_user WHERE status = ?',
        [status]
    );
    return result;
};
