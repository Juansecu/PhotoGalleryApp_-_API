import { resolve } from 'path';

import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import indexRouter from './routes/index.route';
import photoRouter from './routes/photo.route';

const app = express();

// ------ SERVER CONFIGURATION ------
app.set('port', process.env.PORT || 3000);

// ------ MIDDLEWARES ------
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// ------ ROUTES ------
app.use('/', indexRouter);
app.use('/api/photos', photoRouter);

// This folder will contain public files
app.use('/uploads', express.static(resolve('uploads')));

export default app;
