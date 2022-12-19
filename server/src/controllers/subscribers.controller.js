// import { pool } from '../config/db.js';
// import { v4 } from 'uuid';

// export const createSubscription = async (req, res) => {
//     const id = v4();

//     const { name, lastname, ci, email } = req.body;

//     const [subs] = await pool.query('SELECT * FROM subscribers');

//     const sub = subs.find((subcriber) => subcriber.ci === ci);

//     if (sub) return res.status(404).send('El registro ya existe');

//     const [result] = await pool.query('INSERT INTO subscribers SET ?', {
//         id,
//         name,
//         lastname,
//         ci,
//         email,
//     });

//     return res.status(200).json({ message: 'registro creado' });
// };

// export const getSubscription = async (req, res) => {
//     const [result] = await pool.query(
//         'SELECT * FROM subscribers ORDER BY createdAt ASC'
//     );
//     // const [users] = await pool.query('SELECT users.id, username, roles.name, createdUserAt FROM users JOIN roles ON roles.id = users.fk_role')
//     return res.status(200).json(result);
// };

// export const getSubscriptionById = async (req, res) => {
//     const [subscriber] = await pool.query(
//         'SELECT * FROM subscribers WHERE id = ?',
//         [req.params.subsId]
//     );

//     const userSub = subscriber.find((user) => user.id === req.params.subsId);
//     if (!userSub)
//         return res.status(404).json({ message: 'el registro no existe' });
//     return res.status(200).json(subscriber);
// };

// export const updateSubscriptionById = async (req, res) => {
//     const { subsId } = req.params;
//     const [subscriber] = await pool.query(
//         'SELECT * FROM subscribers WHERE id = ?',
//         [subsId]
//     );

//     const userSubscriber = subscriber.find((user) => user.id === subsId);

//     if (!userSubscriber) return res.status(404).send();

//     const [result] = await pool.query('UPDATE subscribers SET ? WHERE id = ?', [
//         req.body,
//         req.params.subsId,
//     ]);

//     return res.json(result);
// };

// export const deleteSubscriptionById = async (req, res) => {
//     const { subsId } = req.params;
//     const [subscriber] = await pool.query(
//         'SELECT * FROM subscribers WHERE id = ?',
//         [subsId]
//     );

//     const subscriberIndex = subscriber.findIndex((user) => user.id === subsId);

//     if (subscriberIndex === -1) return res.status(404).send();

//     const [delSubscriber] = await pool.query(
//         'DELETE FROM subscribers WHERE id = ?',
//         [subsId]
//     );

//     return res.json(delSubscriber);
// };
