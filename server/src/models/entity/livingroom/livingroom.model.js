import { pool } from '../../../config/db';
import { v4 } from 'uuid';

export const create = async (body, fk_event) => {
    const id = v4();
    const { name, description, fk_manager } = body;
    const [result] = await pool.query('INSERT INTO living_room SET ?', {
        id,
        fk_event,
        name,
        description,
        fk_manager,
    });
    return result;
};

export const getLivingRoomByName = async (name) => {
    const [result] = await pool.query(
        'SELECT COUNT(id) as countLiving FROM living_room WHERE living_room.name = ?',
        [name]
    );
    return result[0];
};

export const getlivingroomsByEventId = async (fk_event, status) => {
    const [result] = await pool.query(
        'SELECT living_room.id, living_room.name, living_room.description, manager.name as name_manager, manager.lastname, users.email, living_room.createdAt FROM living_room JOIN `event` ON `event`.id = living_room.fk_event JOIN manager ON manager.id = living_room.fk_manager JOIN users ON users.id = manager.fk_user WHERE users.status = ? AND living_room.fk_event= ?',
        [status, fk_event]
    );
    return result;
};

export const getElementById = async (id) => {
    const [result] = await pool.query(
        'SELECT * FROM living_room WHERE id = ?',
        [id]
    );
    return result;
};

export const deleteElementById = async (id) => {
    const [result] = await pool.query('DELETE FROM living_room WHERE id = ?', [
        id,
    ]);
    return result;
};
