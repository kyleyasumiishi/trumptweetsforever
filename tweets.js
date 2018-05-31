const Twit = require('twit');
const config = require('./config');
const twitter = new Twit(config);
const options = { screen_name: 'kyleyasumiishi', tweet_mode: 'extended' };
let tweetArray = [];

twitter.get('statuses/user_timeline', options, function(err, data) {
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        let tweet = {
            created_at: data[i].created_at,
            text: data[i].full_text,
            user_id: data[i].user.id,
            user_screen_name: data[i].user.screen_name
        };
        tweetArray.push(tweet);
    }
    for (let i = 0; i < tweetArray.length; i++) {
        console.log(tweetArray[i].text);
    }
});

setTimeout(() => {
    console.log(tweetArray.length)
}, 2000);

console.log(tweetArray.length);



module.exports = { tweetArray: tweetArray };