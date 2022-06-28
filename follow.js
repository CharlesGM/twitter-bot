// app.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);


// Set up your search parameters
var params = {

  q: '#kubernetes', //harshtag with whatever you would like to be favorited
  count: 2, //number of tweets you want favorited; in this case, 10
  result_type: 'recent', //specifying the most recent 10 tweets shall be favorited
  lang: 'en' //language to be english
}
T.get('search/tweets', params, function(err, data, response) {
  if(!err){
        // This is where the magic will happen
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
        let screen_name = data.statuses[i].user.screen_name;
        T.post('friendships/create', {screen_name}, function(err, res){
          if(err){
            console.log(err);
          } else {
            console.log(screen_name, ': **FOLLOWED**');
          }
        });
    }
  } else {
    console.log(err);
  }
})
