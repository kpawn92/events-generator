import { pool } from '../../../config/db.js';
import { v4 } from 'uuid';
import { getRoleByName } from '../roles/roles.model.js';
import { passwordHelper } from '../../../helpers/index.js';

export const setAdmin = async () => {
    const [result] = await pool.query(
        'SELECT COUNT(id) as count_users FROM users'
    );
    return result[0];
};

export const createAdmin = async (email, password) => {
    const _id = v4();
    await pool.query('INSERT INTO users SET ?', {
        id: _id,
        email,
        password: await passwordHelper.encryptPassword(password),
        rol: await getRoleByName('admin'),
    });
};

export const getUserByEmail = async (email) => {
    const [result] = await pool.query(
        `SELECT id, email as email_user, password as pass_user FROM users WHERE email = ? AND status = '1'`,
        [email]
    );
    return result[0];
};

export const getEmailByEmail = async (email) => {
    const [result] = await pool.query(
        'SELECT email as _email FROM users WHERE email = ?',
        [email]
    );
    return result;
};

export const create = async (id, email, password) => {
    const _id = v4();
    const [user] = await pool.query('INSERT INTO users SET ?', {
        id: _id,
        email,
        password: await passwordHelper.encryptPassword(password),
        rol: id,
    });
    return { user, _id };
};

export const getRolById = async (id) => {
    const [rol] = await pool.query(
        'SELECT rol_name FROM users JOIN roles ON roles.id = users.rol WHERE users.id = ?',
        [id]
    );
    return rol[0];
};

export const getUsers = async () => {
    const [result] = await pool.query(
        'SELECT users.id, email, rol_name, status FROM users JOIN roles ON roles.id = users.rol'
    );
    return result;
};

export const getUserById = async (id) => {
    const [result] = await pool.query(
        'SELECT users.id, email, rol_name, status FROM users JOIN roles ON roles.id = users.rol WHERE users.id = ?',
        [id]
    );
    return result;
};

export const updateUser = async (id, password, status) => {
    const [result] = await pool.query(
        'UPDATE users SET password = ?, `status` = ? WHERE id = ?',
        [password, status, id]
    );
    return result;
};

export const invalidating = async (id, status) => {
    const [result] = await pool.query(
        'UPDATE users SET `status` = ? WHERE id = ?',
        [status, id]
    );
    return result;
};
