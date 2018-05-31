const tweets = require('../tweets');

const chai = require('chai');
const expect = chai.expect;

describe('tweetArray', function() {

    it('is an array', function() {
        expect(Array.isArray(tweets.tweetArray)).to.be.true;
    });

});