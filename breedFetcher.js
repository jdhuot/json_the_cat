const request = require('request');
const args = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`,(error, response, body) => {
  if (error) {
    if (error.code === "ENOTFOUND") {
      console.log("Hmm I think the url is incorrect...");
    }
  } else {
    const data = JSON.parse(body);
    const catData = data[0];
    if (!catData) {
      console.log("hmmmm... doesn't seem like we can find that cat breed..");
    } else {
      console.log(catData.description);
    }
  }

});

