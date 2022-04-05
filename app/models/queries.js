const db = require('../services/db');

class Queries {

    async getCountryPop() {
        var sql = 'SELECT * FROM country ORDER BY Population DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCountryContPop() {
        var sql = 'SELECT * FROM country ORDER BY Continent, Population DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCountryRegPop() {
        var sql = 'SELECT * FROM country ORDER BY Region, Population DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCitiesPop() {
        var sql = 'SELECT * FROM city ORDER BY Population DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCitiesContPop() {
        var sql = 'SELECT DISTINCT city.* FROM city INNER JOIN country ON \
        city.CountryCode = country.Code ORDER BY country.Continent, \
        city.Population DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCitiesRegPop() {
        var sql = 'SELECT DISTINCT city.* FROM city INNER JOIN country ON \
        city.CountryCode = country.Code ORDER BY country.Region, \
        city.Population DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCitiesCountryPop() {
        var sql = 'SELECT * FROM city ORDER BY CountryCode, Population DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }
    
    async getCitiesDistrictPop() {
        var sql = 'SELECT * FROM city ORDER BY District, Population DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCapitalCityPop() {
        var sql = 'SELECT city.Name AS capitalname, country.Name AS countryname, \
        city.Population AS capitalpopulation FROM country, city WHERE \
        city.ID = country.Capital ORDER BY capitalpopulation DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCapitalCityContPop() {
        var sql = 'SELECT city.Name AS capitalname, country.Name AS countryname, \
        city.Population AS capitalpopulation, country.Continent FROM country, \
        city WHERE city.ID = country.Capital ORDER BY country.Continent, \
        capitalpopulation DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCapitalCityRegPop() {
        var sql = 'SELECT city.Name AS capitalname, country.Name AS countryname, \
        city.Population AS capitalpopulation, country.Region FROM country, \
        city WHERE city.ID = country.Capital ORDER BY country.Region, \
        capitalpopulation DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getPopulationCountry() {
        var sql = 'SELECT country.Name AS name, country.Population AS Pop, SUM(city.Population) \
        AS InCities, (country.Population - SUM(city.Population)) AS OutCities FROM country, city WHERE \
        city.CountryCode = country.Code GROUP BY country.Code ORDER BY Pop DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }
  
    async getPopulationRegion() {
        var sql = 'SELECT country.Region AS name, SUM(country.Population) AS Pop, SUM(city.Population) \
        AS InCities, ((SUM(country.Population)-SUM(city.Population))) AS OutCities FROM country, city WHERE \
        city.CountryCode = country.Code GROUP BY country.Region ORDER BY Pop DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getPopulationContinent() {
        var sql = 'SELECT country.Continent AS name, SUM(country.Population) AS Pop, SUM(city.Population) \
        AS InCities, ((SUM(country.Population)-SUM(city.Population))) AS OutCities FROM country, city WHERE \
        city.CountryCode = country.Code GROUP BY country.Continent ORDER BY Pop DESC;'
        const results = await db.query(sql);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }
}

module.exports = {
    Queries
}