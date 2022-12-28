import { join } from 'path';
import { HOSTING } from '../config/env';

export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API gestor de eventos de trabajos',
            version: '1.0.0',
            description:
                'Mysql_DB, Express para el servidor y peticiones del cliente',
        },
        servers: [
            {
                url: HOSTING,
            },
        ],
    },
    apis: [`${join(__dirname, '../routes/*.js')}`],
};
