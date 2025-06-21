import { createPool } from 'mysql2/promise';

export const db = createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3310,   
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'MiPass123',
  database: process.env.DB_NAME || 'appdb',
  waitForConnections: true,
  connectionLimit: 10
});

