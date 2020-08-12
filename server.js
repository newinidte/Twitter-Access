const express = require('express');
const bodyParser = require('body-parser');

var Twit = require('twit');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

var config = require('./config') //this is we import the config 
//file which is a js file which contains the keys ans tokens
var T = new Twit(config); //this is the object of twit which 
//will help us to call functions inside it
var params = {
q: 'newindite',
count: 1
} // this is the param variable which will have key and value 
//,the key is the keyword which we are interested in searching and count 
//is the count of it
T.get('search/tweets', params,searchedData); // get is the 
// function to search the tweet which three paramaters 'search/tweets'
// ,params and a callback function.
function searchedData(err, data, response) {
console.log(data);
} // searchedData function is a callback function which 
//returns the data when we make a search



app.listen(port, () => console.log(`Listening on port ${port}`));