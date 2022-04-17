const { request } = require('express');
function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}

describe("Click link to Report 1", () => {
  test.todo("Should follow link to report country pop user"), () => {
    const input = [
      {id: 1, url: "localhost:3000/country-pop-user"}
    ];
    const output = [{id: 1, url: "localhost:3000/country-pop-user"}];
    expect(filterByTerm(input, "link")).toEqual(output)
  };
})

describe("Click link to Report 2", () => {
  test.todo("Should follow link to report for continent pop user"), () => {
    const input = [
      {id: 2, url: "localhost:3000/country-continent-pop-user"}
    ];
    const output = [{id: 2, url: "localhost:3000/country-continent-pop-user"}];
    expect(filterByTerm(input, "link")).toEqual(output)
  };
})

describe("Click link to Report 4", () => {
  test.todo("Should follow link to report"), () => {
    const input = [
      {id: 4, url: "localhost:3000/cities-pop-user"}
    ];
    const output = [{id: 4, url: "localhost:3000/cities-pop-user"}];
    expect(filterByTerm(input, "link")).toEqual(output)
  };
})

describe("Click link to Report 8", () => {
  test.todo("Should follow link to report"), () => {
    const input = [
      {id: 8, url: "localhost:3000/cities-district-pop-user"}
    ];
    const output = [{id: 8, url: "localhost:3000/cities-district-pop-user"}];
    expect(filterByTerm(input, "link")).toEqual(output)
  };
})

describe("Click link to Report 10", () => {
  test.todo("Should follow link to report"), () => {
    const input = [
      {id: 10, url: "localhost:3000/capital-city-continent-pop-user"}
    ];
    const output = [{id: 10, url: "localhost:3000/capital-city-continent-pop-user"}];
    expect(filterByTerm(input, "link")).toEqual(output)
  };
})

describe("Click link to Report 11", () => {
  test.todo("Should follow link to report"), () => {
    const input = [
      {id: 11, url: "localhost:3000/capital-city-region-pop-user"}
    ];
    const output = [{id: 11, url: "localhost:3000/capital-city-region-pop-user"}];
    expect(filterByTerm(input, "link")).toEqual(output)
  };
})

// describe('user service country-pop', () => {
//     test('Returns countries by population in descending order if the button is clicked', () => {
//         const options = {
//             country: ""
//         }
//             'SELECT * FROM country ORDER BY Population DESC LIMIT ?;'
//         );
//     });
// });

// describe('Should set limit to 10 for getCountryPopUser', () => {
//     test('Returns countries by total population of a continent if the button is clicked', () => {
//         const { varsql } = user.getCountryPopUser(
//             'SELECT * FROM country ORDER BY Continent, Population DESC;'
//         );
//     });
// });

// describe('Should set limit to 10', () => {
//     test("Should set limit to 10 for getCountryPopUser", () => {
//         const res = userService.getCountryPopUser({
//           limit: 10,
//         });
//         expect(res.take).toBe(10);
//       });
// });

// describe('user service getCountryRegPop', () => {
//     test('Returns countries by total continent population if button clicked', () => {
//         const { varsql } = userService.getCountryRegPop(
//             'SELECT * FROM country ORDER BY Region, Population DESC;'
//         );
//     });
// });

// describe('user service getCitiesPop', () => {
//     test('Returns countries by population in descending order if button clicked', () => {
//         const { varsql } = userService.getCitiesPop(
//             'SELECT * FROM city ORDER BY Population DESC;'
//         );
//     });
// })

