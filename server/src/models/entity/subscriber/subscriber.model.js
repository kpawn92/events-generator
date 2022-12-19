import { pool } from '../../../config/db.js';
import { v4 } from 'uuid';

export const create = async (id, body) => {
    const _id = v4();
    const { name, lastname, dni, nation, institution, category } = body;
    const [subscriber] = await pool.query('INSERT INTO subscriber SET ?', {
        id: _id,
        name,
        lastname,
        nation,
        dni,
        institution,
        category,
        fk_user: id,
    });

    return subscriber;
};

export const setUser = async (dni) => {
    const [result] = await pool.query(
        'SELECT dni FROM subscriber WHERE dni = ?',
        [dni]
    );
    return result;
};
