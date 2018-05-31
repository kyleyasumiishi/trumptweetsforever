const archive = require('./archive');

let TrumpTwitterArchive = [];

for (let i = 0; i < archive.TrumpTwitterArchive.length; i++) {
    let tweet = {
        id_str: archive.TrumpTwitterArchive[i].id_str,
        created_at: archive.TrumpTwitterArchive[i].created_at,
        text: archive.TrumpTwitterArchive[i].text,
        user_id: 25073877,
        user_screen_name: 'realDonaldTrump'
    }
    TrumpTwitterArchive.push(tweet);
};

console.log(TrumpTwitterArchive);