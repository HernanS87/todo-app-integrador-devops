import express, { json } from 'express';
import cors from 'cors';
import { tasksRouter } from './routes/tasks.js';

const app = express();

app.use(cors())
app.use(json());

app.use('/api/tasks', tasksRouter);

app.listen(3000, () => {
  console.log('API escuchando en http://localhost:3000');
});