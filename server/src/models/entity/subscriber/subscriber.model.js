import { v4 } from 'uuid';
import { pool } from '../../../config/db';

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

export const getSubscriberById = async (id) => {
    const [result] = await pool.query(
        'SELECT id FROM subscriber WHERE id = ?',
        [id]
    );
    return result;
};
