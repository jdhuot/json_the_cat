const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response, body, notBreed) => {

    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        error = "ERROR";
        callback(error, response, true);
      } else {
        callback(error, data[0].description, notBreed);
      }
    }
  });
};


module.exports = { fetchBreedDescription };
