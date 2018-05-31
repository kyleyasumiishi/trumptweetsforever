const tweets = require('../tweets');

const chai = require('chai');
const expect = chai.expect;

describe('tweets', function() {

    it('is an array', function() {
        expect(Array.isArray(tweets.tweets)).to.be.true;
    });

});