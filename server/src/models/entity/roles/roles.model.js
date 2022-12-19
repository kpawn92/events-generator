import { pool } from '../../../config/db.js';

export const create = async () => {
    const admin = pool.query(`INSERT INTO roles VALUES(rol_name, 'admin')`);
    const moderator = pool.query(
        `INSERT INTO roles VALUES(rol_name, 'moderator')`
    );
    const manager = pool.query(`INSERT INTO roles VALUES(rol_name, 'manager')`);
    const user = pool.query(`INSERT INTO roles VALUES(rol_name, 'user')`);
    const economist = pool.query(
        `INSERT INTO roles VALUES(rol_name, 'economist')`
    );

    await Promise.all([admin, moderator, manager, economist, user]);
};

export const getRoleByName = async (name) => {
    const [rol] = await pool.query('SELECT id FROM roles WHERE rol_name = ?', [
        name,
    ]);
    const id = rol[0]['id'];
    return id;
};

export const count = async () => {
    const [result] = await pool.query('SELECT COUNT(id) as count FROM roles');

    return result[0];
};

export const getRoles = async () => {
    const [result] = await pool.query('SELECT rol_name FROM roles');
    return result;
};
