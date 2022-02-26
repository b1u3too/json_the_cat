const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, _response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    const requestedCat = data[0];

    if (requestedCat) {
      callback(null, requestedCat.description);
    } else {
      callback("Error: Requested breed not found!");
    }
  });
};

module.exports = { fetchBreedDescription };