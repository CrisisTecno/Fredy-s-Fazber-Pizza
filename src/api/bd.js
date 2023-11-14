const mysql = require('mysql2/promise');

async function connect() {
  const connection = await mysql.createConnection({
    host: 'tu-host',
    user: 'tu-usuario',
    password: 'tu-contraseña',
    database: 'tu-base-de-datos',
  });

  return connection;
}

module.exports = { connect };