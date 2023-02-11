import { v4 } from 'uuid';
import { pool } from '../../../config/db';

export const create = async (fk_subscriber, body) => {
    const { fk_living, abstract, link_presentation = 0 } = body
    const id = v4();
    const [result] = await pool.query('INSERT INTO digest_instance SET ?', {
        id,
        fk_subscriber,
        fk_living,
        abstract,
        link_presentation,
    });
    return result;
};
export const getInstances = async (status) => {
    const [result] = await pool.query(
        'SELECT digest_instance.id, subscriber.id as subsId, subscriber.name, subscriber.lastname, subscriber.dni, subscriber.category, institution, abstract, living_room.name as nameliving, link_presentation as link, status FROM digest_instance JOIN subscriber ON subscriber.id = digest_instance.fk_subscriber JOIN living_room ON living_room.id = fk_living WHERE status = ?', [status]
    );
    return result;
};

export const getStatusBySubscriber = async (fk_subscriber) => {
    const [result] = await pool.query(
        'SELECT digest_instance.id, abstract, living_room.name as nameLiving, `event`.`name` as nameEvent, digest_instance.status FROM digest_instance JOIN living_room ON living_room.id = digest_instance.fk_living JOIN `event` ON `event`.id = living_room.fk_event WHERE fk_subscriber = ?',
        [fk_subscriber]
    );
    return result;
};

export const updateStatusById = async (id, status) => {
    const [result] = await pool.query(
        'UPDATE digest_instance SET status = ? WHERE id = ?',
        [status, id]
    );
    return result;
};

export const getInstanceById = async (id) => {
    const [result] = await pool.query(
        'SELECT id FROM digest_instance WHERE id = ?',
        [id]
    );
    return result;
};
