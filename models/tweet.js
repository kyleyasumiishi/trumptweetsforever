const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    id_str: {type: String, required: true},
    created_at: {type: String, required: true},
    text: {type: String, required: true},
    user_id: {type: Number, required: true},
    user_screen_name: {type: String, required: true}
});

// Export model
module.exports = mongoose.model('Tweet', TweetSchema);