import express from 'express';
import morgan from 'morgan';
import { createRoles, createAdmin } from './libs/initialSetup.js';
import cors from 'cors';
import auth from './routes/auth.routes.js';
import users from './routes/user.routes.js';

const app = express();

// Initial Setup #----------------------#
createRoles();
createAdmin();
//--------------------------------------#

// EndPoins and Middlewares #-----------#
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//--------------------------------------#

// Step users #----------------------------#
app.use('/api/auth/', auth);
app.use('/api/users/', users);
//--------------------------------------#

export { app };
