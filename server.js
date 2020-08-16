const express = require('express');
const bodyParser = require('body-parser');

var Twit = require('twit');
var config = require('./config') //this is we import the config 
//file which is a js file which contains the keys ans tokens

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var T = new Twit(config); //this is the object of twit which 
//will help us to call functions inside it

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Wlecome to ELMO Twitter Test '+req.query.name });
});
var searchParams = null;

app.get('/api/world', (req, res) => {

  T.get('users/search', { q: req.query.searchDetails, count: 3 }, searchedData);

  function searchedData(err, data, response) {
console.log(data)
    res.send(
      data,
    );
  }

});



var showParams = {
  screen_name: 'DhoniZivaFC',
}


T.get('users/show', showParams, searchedData);

function searchedData(err, data, response) {
  //console.log(data);
  // response.send({express:data.statuses[0].text})
  console.log('****************** Show data **************')
  console.log(data);
}



app.listen(port, () => console.log(`Listening on port ${port}`));