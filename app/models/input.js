const db = require('../services/db');

class Input {

    async getCountryPopUser(input) {
        var sql = 'SELECT * FROM country ORDER BY Population DESC LIMIT ?;'
        const results = await db.query(sql, [input]);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }
    
    async getCountryContPopUser(input) {
        var sql = 'SELECT * FROM country ORDER BY Continent, Population DESC LIMIT ?;'
        const results = await db.query(sql, [input]);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }
    
    async getCountryRegPopUser(input) {
        var sql = 'SELECT * FROM country ORDER BY Region, Population DESC LIMIT ?;'
        const results = await db.query(sql, [input]);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }
    
    async getCitiesPopUser(input) {
        var sql = 'SELECT * FROM city ORDER BY Population DESC LIMIT ?;'
        const results = await db.query(sql, [input]);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCitiesContPopUser(input) {
        var sql = 'SELECT DISTINCT city.* FROM city INNER JOIN country ON \
        city.CountryCode = country.Code ORDER BY country.Continent, \
        city.Population DESC LIMIT ?;'
        const results = await db.query(sql, [input]);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCitiesRegPopUser(input) {
        var sql = 'SELECT DISTINCT city.* FROM city INNER JOIN country ON \
        city.CountryCode = country.Code ORDER BY country.Region, \
        city.Population DESC LIMIT ?;'
        const results = await db.query(sql, [input]);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCitiesCountryPopUser(input) {
        var sql = 'SELECT * FROM city ORDER BY CountryCode, Population DESC LIMIT ?;'
        const results = await db.query(sql, [input]);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCitiesDistrictPopUser(input) {
        var sql = 'SELECT * FROM city ORDER BY District, Population DESC LIMIT ?;'
        const results = await db.query(sql, [input]);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }
    
    async getCapitalCityPopUser(input) {
        var sql = 'SELECT city.Name AS capitalname, country.Name AS countryname, \
        city.Population AS capitalpopulation FROM country, city WHERE \
        city.ID = country.Capital ORDER BY capitalpopulation DESC LIMIT ?;'
        const results = await db.query(sql, [input]);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCapitalCityContPopUser(input) {
        var sql = 'SELECT city.Name AS capitalname, country.Name AS countryname, \
        city.Population AS capitalpopulation, country.Continent FROM country, \
        city WHERE city.ID = country.Capital ORDER BY country.Continent, \
        capitalpopulation DESC LIMIT ?;'
        const results = await db.query(sql, [input]);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }

    async getCapitalCityRegPopUser(input) {
        var sql = 'SELECT city.Name AS capitalname, country.Name AS countryname, \
        city.Population AS capitalpopulation, country.Region FROM country, \
        city WHERE city.ID = country.Capital ORDER BY country.Region, \
        capitalpopulation DESC LIMIT ?;'
        const results = await db.query(sql, [input]);
        var rows = [];
        for (var row of results) {
            rows.push(row);
        }
        return rows;
    }
}

module.exports = {
    Input
}