import { v4 } from 'uuid';
import { pool } from '../../../config/db';

export const create = async (fk_subscriber, name) => {
    const id = v4();
    const [result] = await pool.query('INSERT INTO job SET ?', {
        id,
        fk_subscriber,
        name,
    });
    return result;
};

export const jobsBySubs = async (fk_subscriber) => {
    const [result] = await pool.query(
        'SELECT name FROM job WHERE fk_subscriber = ?',
        [fk_subscriber]
    );
    return result;
};

export const jobs = async () => {
    const [result] = await pool.query('SELECT * FROM job');
    return result;
};
