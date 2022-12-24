import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createRoles, createAdmin } from './libs/initialSetup';
import auth from './routes/auth.routes';
import users from './routes/user.routes';
import events from './routes/event.routes';
import livingRoom from './routes/livingroom.routes';
import digestinstance from './routes/digestinstance.routes';

const app = express();

// Initial Setup #----------------------#
createRoles();
createAdmin();
//--------------------------------------#

// Middlewares #------------------------#
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//--------------------------------------#

// Management users #-------------------#
app.use('/api/auth/', auth);
app.use('/api/users/', users);
//--------------------------------------#

// Management events #-------------------#
app.use('/api/events/', events);
app.use('/api/living-room/', livingRoom);
//---------------------------------------#

// Management event participants #---------------#
app.use('/api/digest-instance/', digestinstance);
//-----------------------------------------------#

export { app };
