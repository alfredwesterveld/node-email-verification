var KEY = '123';
var email = require('email-verificationtoken').create(KEY);
var encrypted = email.encrypt('alfredwesterveld@gmail.com');
var decrypted = email.decrypt(encrypted);
console.log(encrypted);
console.log(decrypted);
