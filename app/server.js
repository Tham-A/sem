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

app.get('/country-pop-descending', (req,res) =>{
    // Variable sql that contains instructions to query the database
    var sql = 'SELECT * FROM country ORDER BY Population DESC'
    // Query the database
    db.query(sql).then(results => {
        // Send the results rows to the country template
        // The rows will be in a variable called data
        res.render('country', {'heading':'Countries in the world organised by largest population to smallest' ,data: results});
    });
})

app.get('/country-continent-pop-descending', (req,res) =>{
  // Variable sql that contains instructions to query the database
  var sql = 'SELECT * FROM country ORDER BY Continent, Population DESC'
  // Query the database
  db.query(sql).then(results => {
      // Send the results rows to the country template
      // The rows will be in a variable called data
      res.render('country', {'heading':'Countries in a continent organised by largest population to smallest' ,data: results});
  });
})

app.get('/country-region-pop-descending', (req,res) =>{
  // Variable sql that contains instructions to query the database
  var sql = 'SELECT * FROM country ORDER BY Region, Population DESC'
  // Query the database
  db.query(sql).then(results => {
      // Send the results rows to the country template
      // The rows will be in a variable called data
      res.render('country', {'heading':'Countries in a region organised by largest population to smallest' ,data: results});
  });
})

app.get('/cities-pop-descending', (req,res) =>{
  // Variable sql that contains instructions to query the database
  var sql = 'SELECT * FROM city ORDER BY Population DESC'
  // Query the database
  db.query(sql).then(results => {
      // Send the results rows to the cities template
      // The rows will be in a variable called data
      res.render('cities', {'heading':'Cities in the world organised by largest population to smallest' ,data: results});
  });
})

app.get('/cities-continent-pop-descending', (req,res) =>{
  // Variable sql that contains instructions to query the database
  var sql = 'SELECT DISTINCT city.* FROM city INNER JOIN country ON city.CountryCode = country.Code ORDER BY country.Continent, city.Population DESC;'
  // Query the database
  db.query(sql).then(results => {
    // Send the results rows to the cities template
    // The rows will be in a variable called data
    res.render('cities', {'heading':'Cities in a continent organised by largest population to smallest' ,data: results});
  });
})

app.get('/cities-region-pop-descending', (req,res) =>{
  // Variable sql that contains instructions to query the database
  var sql = 'SELECT DISTINCT city.* FROM city INNER JOIN country ON city.CountryCode = country.Code ORDER BY country.Region, city.Population DESC;'
  // Query the database
  db.query(sql).then(results => {
      // Send the results rows to the cities template
      // The rows will be in a variable called data
      res.render('cities', {'heading':'Cities in the region organised by largest population to smallest' ,data: results});
  });
})

app.get('/cities-country-pop-descending', (req,res) =>{
  // Variable sql that contains instructions to query the database
  var sql = 'SELECT * FROM city ORDER BY CountryCode, Population DESC'
  // Query the database
  db.query(sql).then(results => {
      // Send the results rows to the cities template
      // The rows will be in a variable called data
      res.render('cities', {'heading':'Cities in a country organised by largest population to smallest' ,data: results});
  });
})

app.get('/cities-district-pop-descending', (req,res) =>{
  // Variable sql that contains instructions to query the database
  var sql = 'SELECT * FROM city ORDER BY District, Population DESC'
  // Query the database
  db.query(sql).then(results => {
      // Send the results rows to the cities template
      // The rows will be in a variable called data
      res.render('cities', {'heading':'Cities in a district organised by largest population to smallest' ,data: results});
  });
})

app.get('/capital-city-pop-descending', (req,res) =>{
  // Variable sql that contains instructions to query the database
  var sql = "SELECT city.Name AS capitalname, country.Name AS countryname, city.Population AS capitalpopulation FROM country, city WHERE city.ID = country.Capital ORDER BY capitalpopulation DESC;"
  // Query the database
  db.query(sql).then(results => {
      // Send the results rows to the country template
      // The rows will be in a variable called data
      res.render('capital', {'heading':'Capital Cities in the world organised by largest population to smallest' ,data: results});
  });
})

app.get('/capital-city-continent-pop-descending', (req,res) =>{
  // Variable sql that contains instructions to query the database
  var sql = "SELECT city.Name AS capitalname, country.Name AS countryname, city.Population AS capitalpopulation, country.Continent FROM country, city WHERE city.ID = country.Capital ORDER BY country.Continent, capitalpopulation DESC;"
  // Query the database
  db.query(sql).then(results => {
      // Send the results rows to the country template
      // The rows will be in a variable called data
      res.render('capital', {'heading':'Capital Cities in the world organised by largest population to smallest' ,data: results});
  });
})

app.get('/capital-city-region-pop-descending', (req,res) =>{
  // Variable sql that contains instructions to query the database
  var sql = "SELECT city.Name AS capitalname, country.Name AS countryname, city.Population AS capitalpopulation, country.Region FROM country, city WHERE city.ID = country.Capital ORDER BY country.Region, capitalpopulation DESC;"
  // Query the database
  db.query(sql).then(results => {
      // Send the results rows to the country template
      // The rows will be in a variable called data
      res.render('capital', {'heading':'Capital Cities in the world organised by largest population to smallest' ,data: results});
  });
})

// Choose port 3000 for the server to run on
app.listen('3000', () => {
// Print message once connection is made
console.log('Server running at http://localhost:3000/');
});