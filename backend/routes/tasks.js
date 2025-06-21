import { Router } from "express";

export const tasksRouter = Router();

tasksRouter.get('/', (_, res) => {
  const arr = [];
  arr.push({ id: 1, title: 'Task 1', completed: false });
  arr.push({ id: 2, title: 'Task 2', completed: true });
  arr.push({ id: 3, title: 'Task 3', completed: false });
  res.json(arr);
});