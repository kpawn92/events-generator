import { createPool } from 'mysql2/promise';
import { HOST, USER, PASSWORD, PORT_MYSQL, DATABASE } from './env';

const pool = createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: PORT_MYSQL,
    database: DATABASE,
});

export { pool };
