const mysql = require('mysql');

// Configura tu conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'parqueadero_db'
});

// Conecta a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conectado como ID ' + connection.threadId);
});

module.exports = connection;
