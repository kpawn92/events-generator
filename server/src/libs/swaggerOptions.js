import { HOSTING } from '../config/env'

export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Evenst API',
            version: '1.0.0',
            description: "Express library API"
        },
        servers: [
            {
                url: HOSTING
            }
        ]
    },
    apis: ["../routes/*.js"]
}