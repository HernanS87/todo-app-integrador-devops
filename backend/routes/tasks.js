import { Router } from "express";
import { db } from "../db.js";

export const tasksRouter = Router();


// Listar tareas
tasksRouter.get('/', async (_, res) => {
  const [rows] = await db.query('SELECT * FROM tasks ORDER BY id');
  res.json(rows);
});

// Crear tarea
tasksRouter.post('/', async (req, res) => {
  const { title } = req.body;
  const [result] = await db.execute(
    'INSERT INTO tasks (title) VALUES (?)',
    [title]
  );
  const [task] = await db.query('SELECT * FROM tasks WHERE id = ?', [result.insertId]);
  res.status(201).json(task[0]);
});

// Actualizar tarea
tasksRouter.put('/:id', async (req, res) => {
  const { title, completed } = req.body;
  await db.execute(
    'UPDATE tasks SET title = ?, completed = ? WHERE id = ?',
    [title, completed ? 1 : 0, req.params.id]
  );
  const [task] = await db.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
  res.json(task[0]);
});

// Borrar tarea
tasksRouter.delete('/:id', async (req, res) => {
  await db.execute('DELETE FROM tasks WHERE id = ?', [req.params.id]);
  res.status(204).end();
});