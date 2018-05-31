const Twit = require('twit');
const config = require('./config');
const twitter = new Twit(config);

console.log('Starting stream code');

let stream = twitter.stream('user', '999729900675153900');

stream.on('tweet', function(data, err) {
    if (err) {
        console.log('There was an error');
        console.log(err);
    } else {
        console.log(data);
        let tweet = {
            id_str: data.id_str,
            created_at: data.created_at,
            text: data.extended_tweet.full_text,
            user_id: data.user.id,
            user_screen_name: data.user.screen_name
        };
        console.log(tweet);
    }
});

stream.on('connect', function(request) {
    console.log('connecting...');
});


stream.on('connected', function(request) {
    console.log('connected');
});