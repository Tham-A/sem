// get sql module
const express = require('express');

// Create express app
var app = express();

// Use the Pug templating engine
app.set('view engine', 'pug');
app.set('views', './app/views');

// Get functions fro db.js file
const db = require('./services/db');

// Route for root
app.get("/", function(req, res) {
  res.render("index", {'title':'My index page', 'heading':'Database reports'});
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
    // Query the database
    db.query(sql).then(results => {
        // Send the results rows to the country template
        // The rows will be in a variable called data
        res.render('country', {'heading':'Countries Ordered By Population From Highest To Lowest' ,data: results});
    });
})

// Choose port 3000 for the server to run on
app.listen('3000', () => {
// Print message once connection is made
console.log('Server running at http://localhost:3000/');
});