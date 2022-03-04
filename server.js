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

app.get('/getcities', (req,res) => {
    let sql = 'SELECT * FROM city ';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Cites fetched...');
    });
})

app.get('/getcountries', (req,res) => {
    let sql = 'SELECT * FROM country';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Countries fetched...');
    });
})

app.get('/getcountrylanguage', (req,res) => {
    let sql = 'SELECT * FROM countrylanguage';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Languages fetched...');
    });
})

