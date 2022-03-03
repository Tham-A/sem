// get sql module
const mysql = require('mysql');

// Create a const variable that will connect with database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'world'
});

// create a variable that holds instructions to access database
// This will only print from city table
let sql = `SELECT * FROM city`;

// Query the database using instructions in sql variable
db.query(sql, (error, results, fields) => {
  // If there is an error it will print the error message
  if (error) {
    return console.error(error.message);
  }
  // Else will print data in terminal
  console.log(results);
});

// End the connection
connection.end(); 