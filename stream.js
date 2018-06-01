const Twit = require('twit');
const config = require('./config');
const twitter = new Twit(config.Twitter);
// const Tweet = require('./models/tweet');

console.log('Starting stream code');

let stream = twitter.stream('user', config.TwitterUserID);

// stream.on('tweet', function(tweet, err) {
//     console.log('There was a tweet');
//     if (err) {
//         console.log('There was an error');
//         console.log(err);
//     } else {
//         let t = {
//             id_str: tweet.id_str,
//             created_at: tweet.created_at,
//             text: tweet.extended_tweet.full_text,
//             user_id: tweet.user.id,
//             user_screen_name: tweet.user.screen_name
//         };
//         // let tweet = new Tweet({
//         //     id_str: tweet.id_str,
//         //     created_at: tweet.created_at,
//         //     text: tweet.extended_tweet.full_text,
//         //     user_id: tweet.user.id,
//         //     user_screen_name: tweet.user.screen_name
//         // });
//         // tweet.save(function(err) {
//         //     if (err) return console.log(err);
//         // });
//         console.log(t);
//     }
// });

stream.on('connect', function(request) {
    console.log('connecting...');
});

stream.on('connected', function(request) {
    console.log('connected!');
});

stream.on('tweet', function(tweet) {
    console.log('There was a tweet');
    let t = {
        id_str: tweet.id_str,
        created_at: tweet.created_at,
        text: tweet.extended_tweet.full_text,
        user_id: tweet.user.id,
        user_screen_name: tweet.user.screen_name
    };
    // let tweet = new Tweet({
    //     id_str: tweet.id_str,
    //     created_at: tweet.created_at,
    //     text: tweet.extended_tweet.full_text,
    //     user_id: tweet.user.id,
    //     user_screen_name: tweet.user.screen_name
    // });
    // tweet.save(function(err) {
    //     if (err) return console.log(err);
    // });
    console.log(t);
});