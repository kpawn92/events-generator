import { v4 } from 'uuid'
import { pool } from '../../../config/db'

export const create = async (body) => {
    const id = v4()
    const { fk_subscriber, abstract } = body
    const [result] = await pool.query('INSERT INTO digest_instance SET ?', {
        id,
        fk_subscriber,
        abstract
    })
    return result
};
export const getInstances = async () => {
    const [result] = await pool.query('SELECT digest_instance.id, subscriber.id as subsId, subscriber.name, subscriber.lastname, subscriber.dni, abstract, status FROM digest_instance JOIN subscriber ON subscriber.id = digest_instance.fk_subscriber')
    return result
};

export const getStatusBySubscriber = async (fk_subscriber) => {
    const [result] = await pool.query('SELECT id, abstract, status FROM digest_instance WHERE fk_subscriber = ?', [fk_subscriber]);
    return result;
};

export const updateStatusById = async (id, status) => {
    const [result] = await pool.query('UPDATE digest_instance SET status = ? WHERE id = ?', [status, id]);
    return result;
};