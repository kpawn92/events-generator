import { pool } from '../../../config/db'
import { v4 } from 'uuid'

export const create = async (body, fk_event) => {
    const id = v4();
    const { name, description, fk_manager } = body;
    const [result] = await pool.query('INSERT INTO living_room SET ?', {
        id,
        fk_event,
        name,
        description,
        fk_manager
    });
    return result;
};

export const getLivingRoomByName = async (name) => {
    const [result] = await pool.query('SELECT COUNT(id) as countLiving FROM living_room WHERE living_room.name = ?', [name])
    return result[0]
}