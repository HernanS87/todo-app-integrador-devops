import express from 'express';

const app = express();

app.use('/', (req, res) => {
  res.send('<h1>API - TodoApp</h1>');
});

app.listen(3000, () => {
  console.log('API escuchando en http://localhost:3000');
});