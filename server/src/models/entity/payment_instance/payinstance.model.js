import { v4 } from 'uuid';
import { pool } from '../../../config/db';

export const create = async (body) => {
    const id = v4()
    const { fk_subscriber, transaction } = body;
    const [result] = await pool.query('INSERT INTO payment_instance SET ?', {
        id,
        fk_subscriber,
        transaction
    })
    return result
};

export const getPayments = async () => {
    const [result] = await pool.query('SELECT * FROM payment_instance')
    return result
};

export const updateStatePaymentById = async (id, status) => {
    const [result] = await pool.query('UPDATE payment_instance SET status = ? WHERE id = ?', [status, id])
    return result
};
