// get sql module
const mysql = require('mysql');
const express = require('express');

// Create an express app
var app = express();

// Create a const variable that will connect with database
const db = require('./services/db');

// Choose port 3000 for the server to run on
app.listen('3000', () => {
      // Print message once connection is made
    console.log('Server starting on http://127.0.0.1:3000/');
});

app.get("/", function(req, res) {
  res.send("Working");
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
        // Displays data from database
        res.send(results);
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
        // Displays data from database
        res.send(results);
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
        // Displays data from database
        res.send(results);
    });
  })

  app.get('/country_pop_fromlarge', (req,res) => {
  let sql = 'SELECT * FROM country ORDER BY Population DESC';
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send(results);
  });
})

app.get("/testing", function(req,res){
  var sql = 'SELECT * FROM country ORDER BY Population DESC';
  db.query(sql).then(results => {
    console.log(results);
    res.json(results)
  });
})