import { v4 } from 'uuid';
import { pool } from '../../../config/db';

export const create = async (fk_subscriber, transaction, fk_digestInstance) => {
    const id = v4();
    const [result] = await pool.query('INSERT INTO payment_instance SET ?', {
        id,
        fk_subscriber,
        fk_digestInstance,
        transaction,
    });
    return result;
};

export const getPayments = async () => {
    const [result] = await pool.query('SELECT * FROM payment_instance');
    return result;
};

export const updateStatePaymentById = async (id, status) => {
    const [result] = await pool.query(
        'UPDATE payment_instance SET status = ? WHERE id = ?',
        [status, id]
    );
    return result;
};

export const getStateBySubscriber = async (fk_subscriber) => {
    const [result] = await pool.query(
        'SELECT id, transaction, fk_digestInstance, status, createdAt FROM payment_instance WHERE fk_subscriber = ?',
        [fk_subscriber]
    );
    return result;
};

export const getPaymentByTransaction = async (transaction) => {
    const [result] = await pool.query(
        'SELECT id FROM payment_instance WHERE transaction = ?',
        [transaction]
    );
    return result;
};
