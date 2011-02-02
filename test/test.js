var assert = require('assert');
var KEY1 = '123';
var KEY2 = '456';

exports.testEmailWithSameKeyShouldSucceed = function(){
    var email = require('email-verificationtoken').create(KEY1);
    var expected = 'alfredwesterveld@gmail.com';
    var encrypted = email.encrypt(expected);
    var decrypted = email.decrypt(encrypted);
    assert.equal(expected, decrypted);
};

exports.testEmailWithDifferentKeyShouldFail = function(){
    var email1 = require('email-verificationtoken').create(KEY1);
    var email2 = require('email-verificationtoken').create(KEY2);
    var expected = 'alfredwesterveld@gmail.com';
    var encrypted = email1.encrypt(expected);
    var decrypted = email2.decrypt(encrypted);
    assert.notEqual(expected, decrypted);
};
