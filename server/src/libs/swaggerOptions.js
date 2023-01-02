import { join } from 'path';
import { HOSTING } from '../config/env';

export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API REST: gestor de eventos',
            version: '1.0.0',
            description:
                'Almacenamiento de datos, auth-code codigo de autenticacion y autorizacion, encriptacion de contraseñas, rapida gestion de datos, peticiones get en cache',
        },
        servers: [
            {
                url: HOSTING,
            },
        ],
    },
    apis: [`${join(__dirname, '../routes/*.js')}`],
};
