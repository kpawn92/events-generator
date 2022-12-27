import { v4 } from 'uuid'
import { pool } from '../../../config/db'

export const create = async (fk_subscriber, name, link_presentation) => {
    const id = v4()
    const [result] = await pool.query('INSERT INTO job SET ?', {
        id,
        fk_subscriber,
        name,
        link_presentation
    })
    return result
};