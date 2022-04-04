// get sql module
const express = require('express');

// Create express app
var app = express();

// Use the Pug templating engine
app.set('view engine', 'pug');
app.set('views', './app/views');

// Get functions fro db.js file
const db = require('./services/db');
app.use(express.urlencoded({ extended: true }));

const { Input } = require("./models/input");
const { Queries } = require("./models/queries");

// Route for root
app.get("/", function(req, res) {
  res.render("index", {'title':'My index page', 'heading':'Database reports'});
});

app.get('/country-pop', (req,res) =>{
    // Create variable of Queries class
    var user = new Queries;
    // Call function within said class that holds query
    user.getCountryPop().then(results => {
        // Display results using country pug template
        res.render('country', {'heading':'Countries in the world organised by largest population to smallest' ,data: results});
    });
})

app.get('/country-continent-pop', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getCountryContPop().then(results => {
      // Display results using country pug template
      res.render('country', {'heading':'Countries in a continent organised by largest population to smallest' ,data: results});
  });
})

app.get('/country-region-pop', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getCountryRegPop().then(results => {
      // Display results using country pug template
      res.render('country', {'heading':'Countries in a region organised by largest population to smallest' ,data: results});
  });
})

app.get('/cities-pop', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getCitiesPop().then(results => {
      // Display results using cities pug template
      res.render('cities', {'heading':'Cities in the world organised by largest population to smallest' ,data: results});
  });
})

app.get('/cities-continent-pop', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getCitiesContPop().then(results => {
    // Display results using cities pug template
    res.render('cities', {'heading':'Cities in a continent organised by largest population to smallest' ,data: results});
  });
})

app.get('/cities-region-pop', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getCitiesRegPop().then(results => {
      // Display results using cities pug template
      res.render('cities', {'heading':'Cities in the region organised by largest population to smallest' ,data: results});
  });
})

app.get('/cities-country-pop', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getCitiesCountryPop().then(results => {
      // Display results using cities pug template
      res.render('cities', {'heading':'Cities in a country organised by largest population to smallest' ,data: results});
  });
})

app.get('/cities-district-pop', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getCitiesDistrictPop().then(results => {
      // Display results using cities pug template
      res.render('cities', {'heading':'Cities in a district organised by largest population to smallest' ,data: results});
  });
})

app.get('/capital-city-pop', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getCapitalCityPop().then(results => {
      // Display results using capital pug template
      res.render('capital', {'heading':'Capital Cities in the world organised by largest population to smallest' ,data: results});
  });
})

app.get('/capital-city-continent-pop', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getCapitalCityContPop().then(results => {
      // Display results using capital pug template
      res.render('capital', {'heading':'Capital Cities in a continent organised by largest population to smallest' ,data: results});
  });
})

app.get('/capital-city-region-pop', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getCapitalCityRegPop().then(results => {
      // Display results using capital pug template
      res.render('capital', {'heading':'Capital Cities in a region organised by largest population to smallest' ,data: results});
  });
})

app.get('/population-country', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getPopulationCountry().then(results => {
      // Display results using capital pug template
      res.render('population', {'heading':'The population of people, people living in cities, and people not living in cities in each \
      country' ,data: results});
  });
})

app.get('/population-region', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getPopulationRegion().then(results => {
      // Display results using capital pug template
      res.render('population', {'heading':'The population of people, people living in cities, and people not living in cities in each \
      region' ,data: results});
  });
})

app.get('/population-continent', (req,res) =>{
  // Create variable of Queries class
  var user = new Queries;
  // Call function within said class that holds query
  user.getPopulationContinent().then(results => {
      // Display results using capital pug template
      res.render('population', {'heading':'The population of people, people living in cities, and people not living in cities in each \
      continent' ,data: results});
  });
})

app.get('/country-pop-user', (req,res) =>{
  // Display report page with input template
  res.render('input', {'heading':'Countries in the world organised by largest population to smallest with user input'});
});

app.get('/country-continent-pop-user', (req,res) =>{
  // Display report page with input template
  res.render('input', {'heading':'Countries in a continent organised by largest population to smallest with user input'});
});

app.get('/country-region-pop-user', (req,res) =>{
  // Display report page with input template
  res.render('input', {'heading':'Countries in a region organised by largest population to smallest with user input'});
});

app.get('/cities-pop-user', (req,res) =>{
  // Display report page with input template
  res.render('input', {'heading':'Cities in the world organised by largest population to smallest with user input'});
});

app.get('/cities-continent-pop-user', (req,res) =>{
  // Display report page with input template
  res.render('input', {'heading':'Cities in a continent organised by largest population to smallest with user input'});
});

app.get('/cities-region-pop-user', (req,res) =>{
  // Display report page with input template
  res.render('input', {'heading':'Cities in a region organised by largest population to smallest with user input'});
});

app.get('/cities-country-pop-user', (req,res) =>{
  // Display report page with input template
  res.render('input', {'heading':'Cities in a country organised by largest population to smallest with user input'});
});

app.get('/cities-district-pop-user', (req,res) =>{
  // Display report page with input template
  res.render('input', {'heading':'Cities in a district organised by largest population to smallest with user input'});
});

app.get('/capital-city-pop-user', (req,res) =>{
  // Display report page with input template
  res.render('input', {'heading':'Capital Cities in the world organised by largest population to smallest with user input'});
 });

app.get('/capital-city-continent-pop-user', (req,res) =>{
  // Display report page with input template
  res.render('input', {'heading':'Capital Cities in a continent organised by largest population to smallest with user input'});
});

app.get('/capital-city-region-pop-user', (req,res) =>{
  // Display report page with input template
  res.render('input', {'heading':'Capital Cities in a region organised by largest population to smallest with user input'});
});

app.post('/user-input', function (req, res) {
  // Get the submitted values
  params = req.body;
  // Create variable of Input class
  var user = new Input()
  // If else statements to check the referrer url from the input from the multiple reports that use the
  // input template with a try catch block to catch any errors from the input
  // Pass input through correction function and display results using country template
  if (req.get('Referrer') == 'http://localhost:3000/country-pop-user') {
    try {
      user.getCountryPopUser(params.note).then(result => {
        res.render('country', {'heading':'Countries in the world organised by largest population to smallest with user input' ,data: result});
    })
    } catch (err) {
    console.error(`Error while getting input `, err.message);
    }
  } else if (req.get('Referrer') == 'http://localhost:3000/country-continent-pop-user') {
    try {
      user.getCountryContPopUser(params.note).then(result => {
        res.render('country', {'heading':'Countries in a continent organised by largest population to smallest with user input' ,data: result});
    })
    } catch (err) {
    console.error(`Error while getting input `, err.message);
    }
  } else if (req.get('Referrer') == 'http://localhost:3000/country-region-pop-user') {
    try {
      user.getCountryRegPopUser(params.note).then(result => {
        res.render('country', {'heading':'Countries in a region organised by largest population to smallest with user input' ,data: result});
    })
    } catch (err) {
    console.error(`Error while getting input `, err.message);
    }
  } else if (req.get('Referrer') == 'http://localhost:3000/cities-pop-user') {
    try {
      user.getCitiesPopUser(params.note).then(result => {
        res.render('cities', {'heading':'Cities in the world organised by largest population to smallest with user input' ,data: result});
    })
    } catch (err) {
    console.error(`Error while getting input `, err.message);
    }
  } else if (req.get('Referrer') == 'http://localhost:3000/cities-continent-pop-user') {
    try {
      user.getCitiesContPopUser(params.note).then(result => {
        res.render('cities', {'heading':'Cities in a continent organised by largest population to smallest with user input' ,data: result});
    })
    } catch (err) {
    console.error(`Error while getting input `, err.message);
    }
  } else if (req.get('Referrer') == 'http://localhost:3000/cities-region-pop-user') {
    try {
      user.getCitiesRegPopUser(params.note).then(result => {
        res.render('cities', {'heading':'Cities in a region organised by largest population to smallest with user input' ,data: result});
    })
    } catch (err) {
    console.error(`Error while getting input `, err.message);
    }
  } else if (req.get('Referrer') == 'http://localhost:3000/cities-country-pop-user') {
    try {
      user.getCitiesCountryPopUser(params.note).then(result => {
        res.render('cities', {'heading':'Cities in a country organised by largest population to smallest with user input' ,data: result});
    })
    } catch (err) {
    console.error(`Error while getting input `, err.message);
    }
  } else if (req.get('Referrer') == 'http://localhost:3000/cities-district-pop-user') {
    try {
      user.getCitiesDistrictPopUser(params.note).then(result => {
        res.render('cities', {'heading':'Cities in a district organised by largest population to smallest with user input' ,data: result});
    })
    } catch (err) {
    console.error(`Error while getting input `, err.message);
    }
  } else if (req.get('Referrer') == 'http://localhost:3000/capital-city-pop-user') {
    try {
      user.getCapitalCityPopUser(params.note).then(result => {
        res.render('capital', {'heading':'Capital Cities in the world organised by largest population to smallest with user input' ,data: result});
    })
    } catch (err) {
    console.error(`Error while getting input `, err.message);
    }
  } else if (req.get('Referrer') == 'http://localhost:3000/capital-city-continent-pop-user') {
    try {
      user.getCapitalCityContPopUser(params.note).then(result => {
        res.render('capital', {'heading':'Capital Cities in a continent organised by largest population to smallest with user input' ,data: result});
    })
    } catch (err) {
    console.error(`Error while getting input `, err.message);
    }
  } else if (req.get('Referrer') == 'http://localhost:3000/capital-city-region-pop-user') { 
    try {
      user.getCapitalCityRegPopUser(params.note).then(result => {
        res.render('capital', {'heading':'Capital Cities in a region organised by largest population to smallest with user input' ,data: result});
    })
    } catch (err) {
    console.error(`Error while getting input `, err.message);
    }
  }
  else { console.log("You have run into some error");}
});

// Choose port 3000 for the server to run on
app.listen('3000', () => {
// Print message once connection is made
console.log('Server running at http://localhost:3000/');
});