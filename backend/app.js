import express, { json } from 'express';
import cors from 'cors';
import { tasksRouter } from './routes/tasks.js';

export const app = express();

app.use(cors())
app.use(json());

app.use('/api/tasks', tasksRouter);