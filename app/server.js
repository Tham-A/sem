// get sql module
const express = require('express');

var app = express();

const db = require('./services/db');

app.get("/", function(req, res) {
  res.send("Main Page");
});

// If URL contains get citiies
app.get('/getcities', function(req,res) {
  // Variable sql that contains instructions to query the database
    var sql = 'SELECT * FROM city ';
    // Variable that queries the database using the sql variable
    db.query(sql).then(results => {
        // Prints data in terminal 
        console.log(results);
        // Displays data from database
        res.json(results);
    });
})

// If URL contains get contries
app.get('/getcountries', (req,res) => {
  // Variable sql that contains instructions to query the database
    let sql = 'SELECT * FROM country';
    // Variable that queries the database using the sql variable
    db.query(sql, (err, results) => {
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
    db.query(sql, (err, results) => {
      // Throws error if there is one
        if(err) throw err;
        // Prints data in terminal
        console.log(results);
        // Displays data from database
        res.send(results);
    });
})

app.get('/country-pop-descending', (req,res) =>{
    let sql = 'SELECT * FROM country ORDER BY Population DESC'
    var output = '<table border="lpx">';
    db.query(sql, (err, results) => {
      for (var row of results) {
        output += '<tr>';
        output += '<td>' + row.Name + '<td>';
        output += '<td>' + row.Population + '<td>';
        output += '</tr>'
    }
    output += '</table>';
    res.send(output);
});
})

// Choose port 3000 for the server to run on
app.listen('3000', () => {
  // Print message once connection is made
console.log('Server running at http://127.0.0.1:3000/');
});