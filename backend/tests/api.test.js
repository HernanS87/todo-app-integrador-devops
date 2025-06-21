import request from 'supertest';  
import { app } from '../app.js';
import { db } from '../db.js';

describe('API de tareas', () => {
  it('GET /api/tasks debe devolver un array con al menos 3 tasks y status 200', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(3); 
  });
});

// Cerramos el pool de conexiones después de todos los tests
afterAll(() => {
  if (db.end) db.end();  // Cierra el pool si existe
});
