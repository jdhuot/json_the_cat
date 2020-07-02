const breedName = process.argv[2];
const { fetchBreedDescription } = require('./breedfetcher');

fetchBreedDescription(breedName, (error, desc, notBreed) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (notBreed) {
    console.log("No breed in database..");
  } else {
    console.log(desc);
  }
});