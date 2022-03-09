// get sql module
const mysql = require('mysql');
const express = require('express');

// Create a const variable that will connect with database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'world'
});

// Connect database to server
db.connect((err) => {
  // If there is an error it will throw the error
  if(err){
      throw err;
    }
    // Print message if connection is successful
  console.log('my SQL connected...');

});
// Create a variable of express type
const app = express();

// Choose port 3000 for the server to run on
app.listen('3000', () => {
      // Print message once connection is made
    console.log('Server started on port 3000');
});

// If URL contains get citiies
app.get('/getcities', (req,res) => {
  // Variable sql that contains instructions to query the database
    let sql = 'SELECT * FROM city ';
    // Variable that queries the database using the sql variable
    let query = db.query(sql, (err, results) => {
      // Throws error if there is one
        if(err) throw err;
        // Prints data in terminal 
        console.log(results);
        // Displays message cities fetched in browser
        res.send('Cites fetched...');
    });
})

// If URL contains get contries
app.get('/getcountries', (req,res) => {
  // Variable sql that contains instructions to query the database
    let sql = 'SELECT * FROM country';
    // Variable that queries the database using the sql variable
    let query = db.query(sql, (err, results) => {
      // Throws error if there is one
        if(err) throw err;
        // Prints data in terminal
        console.log(results);
        // Displays message countries fetched in browser
        res.send('Countries fetched...');
    });
})

// If URL contains get language
app.get('/getcountrylanguage', (req,res) => {
  // Variable sql that contains instructions to query the database
    let sql = 'SELECT * FROM countrylanguage';
    // Variable that queries the database using the sql variable
    let query = db.query(sql, (err, results) => {
      // Throws error if there is one
        if(err) throw err;
        // Prints data in terminal
        console.log(results);
        // Displays message languages fetched in browser
        res.send('Languages fetched...');
    });
})

