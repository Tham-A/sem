// get sql module
const express = require('express');

// Create express app
var app = express();

// Get functions fro db.js file
const db = require('./services/db');

// Route for root
app.get("/", function(req, res) {
  res.send("Main Page");
});

// If route contains get citiies
app.get('/getcities', function(req,res) {
  // Variable sql that contains instructions to query the database
    var sql = 'SELECT * FROM city ';
    // Variable that queries the database using the sql variable
    db.query(sql).then(results => {
        // Prints data in terminal 
        console.log(results);
        // Displays data to browser
        res.json(results);
    });
})

// If route contains get contries
app.get('/getcountries', (req,res) => {
  // Variable sql that contains instructions to query the database
    var sql = 'SELECT * FROM country';
    // Variable that queries the database using the sql variable
    db.query(sql).then(results => {
        // Prints data in terminal
        console.log(results);
        // Displays data to browser
        res.json(results);
    });
})

// If route contains get language
app.get('/getcountrylanguage', (req,res) => {
    // Variable sql that contains instructions to query the database
    var sql = 'SELECT * FROM countrylanguage';
    // Variable that queries the database using the sql variable
    db.query(sql).then(results => {
        // Prints data in terminal
        console.log(results);
        // Displays data to browser
        res.json(results);
    });
})

// If route contains country pop descending
app.get('/country-pop-descending', (req,res) =>{
    // Variable sql that contains instructions to query the database
    var sql = 'SELECT * FROM country ORDER BY Population DESC'
    // Variable to print table and append data
    var output = '<table border="lpx">';
    // Query the database
    db.query(sql).then(results => {
      // Loop and iterate throw every row
      for (var row of results) {
        // Format table and append data
        output += '<tr>';
        output += '<td>' + row.Name + '<td>';
        output += '<td>' + row.Population + '<td>';
        output += '</tr>'
    }
    // Close table
    output += '</table>';
    // Send out output
    res.json(output);
});
})

// Choose port 3000 for the server to run on
app.listen('3000', () => {
// Print message once connection is made
console.log('Server running at http://localhost:3000/');
});