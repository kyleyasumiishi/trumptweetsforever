const Twit = require('twit');
const config = require('./config');
const twitter = new Twit(config.Twitter);
const Tweet = require('./models/tweet');

console.log('Starting stream code');

const stream = twitter.stream('user', config.TwitterUserID);

stream.on('tweet', function(data, err) {
    if (err) {
        console.log('There was an error');
        console.log(err);
    } else {
        // let tweet = {
        //     id_str: data.id_str,
        //     created_at: data.created_at,
        //     text: data.extended_tweet.full_text,
        //     user_id: data.user.id,
        //     user_screen_name: data.user.screen_name
        // };
        let tweet = new Tweet({
            id_str: data.id_str,
            created_at: data.created_at,
            text: data.extended_tweet.full_text,
            user_id: data.user.id,
            user_screen_name: data.user.screen_name
        });
        tweet.save(function(err) {
            if (err) return console.log(err);
        })
        console.log(tweet);
    }
});

stream.on('connect', function(request) {
    console.log('connecting...');
});


stream.on('connected', function(request) {
    console.log('connected!');
});