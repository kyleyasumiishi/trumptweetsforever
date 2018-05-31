const Twit = require('twit');
const config = require('./config');
const twitter = new Twit(config);
const options = { screen_name: 'kyleyasumiishi', tweet_mode: 'extended', count: 40000 };
let tweetArray = [];

twitter.get('statuses/user_timeline', options, function(err, data) {
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        let tweet = {
            id_str: data[i].id_str,
            created_at: data[i].created_at,
            text: data[i].full_text,
            user_id: data[i].user.id,
            user_screen_name: data[i].user.screen_name
        };
        tweetArray.push(tweet);
    }
    return tweetArray;
}).then((result) => {
    console.log('Number of tweets: ', tweetArray.length);
    console.log(tweetArray);
    return tweetArray;
});
// }).then((result) => {
//     for (let i = 0; i < tweetArray.length; i++) {
//         console.log(tweetArray[i], '\n');
//     }

// });

// setTimeout(() => {
//     console.log(tweetArray.length)
// }, 2000);


module.exports = { tweetArray: tweetArray };