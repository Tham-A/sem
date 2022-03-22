// Create a const variable that will connect with database
const mysql = require('mysql2/promise');

// Create config variable that is constant to hold db info
const config = {
    db: {
    host: process.env.DB_HOST || 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD || '',
    database: 'world',
    port:'3306',
    waitForConnections: true,
    connectionLimit: 2,
    queueLimit: 0,
    },
  };
  
  // Create pool using config data
  const pool = mysql.createPool(config.db);
  
  // Async function to query database and wait for data to be read
  async function query(sql, params) {
    const [rows, fields] = await pool.execute(sql, params);
    // Will return the row values
    return rows;
  }

  // Export the query function
  module.exports = {
      query,
  }