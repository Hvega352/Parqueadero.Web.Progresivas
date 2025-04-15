const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db');
const app = express();
const port = 3002;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor en funcionamiento!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
