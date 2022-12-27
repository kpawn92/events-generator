import { config } from 'dotenv';

config();

export const {
    PORT,
    PORT_MYSQL,
    HOST,
    USER,
    PASSWORD,
    DATABASE,
    KEY_SECRET,
    KEY_ADMIN,
    EMAIL_ADMIN,
    KEY_HEADER_ADMIN,
    VOID_KEY_HEADER_ADMIN,
    KEY_HEADER_MODERATOR,
    VOID_KEY_HEADER_MODERATOR,
    KEY_TOKEN_HEADER,
    HOSTING,
} = process.env;
