const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecata/pi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error || response.responseCode !== 200) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const requestedCat = data[0];
    console.log(requestedCat === undefined ? 'Error: Requested breed not found!' : requestedCat.description);
  }
});