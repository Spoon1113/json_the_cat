const request = require("request");


const fetchBreedDescription = function (breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    if (body === "[]") {
      return callback("Breed not found");
    }
    const data = JSON.parse(body);
    return callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };