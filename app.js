const express = require('express');
const config = require('./config');

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = config.MongoDB;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = app;