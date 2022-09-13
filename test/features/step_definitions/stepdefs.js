const assert = require('assert')
const {Given, When, Then} = require('cucumber')

let app = require('../../../src/app')

Given('today is Monday', function () {
// Write code here that turns the phrase above into concrete actions
this.today = "Monday";
});

Given('today is Friday', function () {
    // Write code here that turns the phrase above into concrete actions
    this.today = "Friday";
    });


Given('today is {string}', function (givenDay) {
    // Write code here that turns the phrase above into concrete actions
    this.today = givenDay;
    });


When('I ask whether it\'s Friday yet', function () {
// Write code here that turns the phrase above into concrete actions
this.actualAnswer = app.isItFriday(this.today)
});

Then('I should be told {string}', function (exprectedAnswer) {
// Write code here that turns the phrase above into concrete actions
    assert.equal(this.actualAnswer, exprectedAnswer)
});
