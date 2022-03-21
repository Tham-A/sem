// Create a const variable that will connect with database
const mysql = require('mysql2/promise');

const config = {
    db: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'world',
    port:'3308',
    waitForConnections: true,
    connectionLimit: 2,
    queueLimit: 0,
    },
  };
  
  const pool = mysql.createPool(config.db);
  
  async function query(sql, params) {
    const [rows, fields] = await pool.execute(sql, params);
  
    return rows;
  }

  module.exports = {
      query,
  }