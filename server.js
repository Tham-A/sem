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

db.connect((err) =>{
  if(err){
      throw err;
  }
  console.log('my SQL connected...');

});
const app = express();

app.listen('3000', () => {
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

