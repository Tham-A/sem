const mysql = require('mysql2/promise');
const testQuery = async query => {

    const config = {
        db: {
        host: process.env.DB_HOST || 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD || '',
        database: 'world',
        port:'3306',
        waitForConnections: true,
        connectionLimit: 2,
        queueLimit: 0,
        },
      };
    const pool = mysql.createPool(config.db)
}

test('Should return getPopulationContinent query', async () => {
    const recordset = await testQuery(`
        SELECT country.Continent AS name, SUM(country.Population) AS Pop, SUM(city.Population) \
        AS InCities, ((SUM(country.Population)-SUM(city.Population))) AS OutCities FROM country, city WHERE \
        city.CountryCode = country.Code GROUP BY country.Continent ORDER BY Pop DESC; 
    `)
    expect(recordset).toEqual(undefined)
  })

test('Should return getCountryRegPop query', async () => {
    const recordset = await testQuery(`
    SELECT * FROM country ORDER BY Region, Population DESC; 
    `)
    expect(recordset).toEqual(undefined)
  })

test('Should return getCountryPop query', async () => {
    const recordset = await testQuery(`
    SELECT * FROM country ORDER BY Population DESC; 
    `)
    expect(recordset).toEqual(undefined)
  })

test('Should return getCountryContPopUser query', async () => {
    const recordset = await testQuery(`
    SELECT * FROM country ORDER BY Continent, Population DESC LIMIT ?; 
    `)
    expect(recordset).toEqual(undefined)
  })

test('Should return getCitiesPopUser query', async () => {
    const recordset = await testQuery(`
    SELECT * FROM city ORDER BY Population DESC LIMIT ?; 
    `)
    expect(recordset).toEqual(undefined)
  })

  test('Should return getCitiesRegPopUser query', async () => {
    const recordset = await testQuery(`
    SELECT DISTINCT city.* FROM city INNER JOIN country ON \
    city.CountryCode = country.Code ORDER BY country.Region, \
    city.Population DESC LIMIT ?; 
    `)
    expect(recordset).toEqual(undefined)
  })


  