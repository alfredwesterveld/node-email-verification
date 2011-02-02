var assert = require('assert');
var email = require('email-verificationtoken')
var KEY1 = '123';
var KEY2 = '456';

exports.testEmailWithSameKeyShouldSucceed = function(){
    var encryptEmail1 = email.create(KEY1);
    var expected = 'alfredwesterveld@gmail.com';
    var encrypted = encryptEmail1.encrypt(expected);
    var decrypted = encryptEmail1.decrypt(encrypted);
    assert.equal(expected, decrypted);
};

exports.testEmailWithDifferentKeyShouldFail = function(){
    var encryptEmail1 = email.create(KEY1);
    var encryptEmail2 = email.create(KEY2);
    var expected = 'alfredwesterveld@gmail.com';
    var encrypted = encryptEmail1.encrypt(expected);
    var decrypted = encryptEmail2.decrypt(encrypted);
    assert.notEqual(expected, decrypted);
};
