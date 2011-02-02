// To create secret token for email adress.
var KEY = '123'; // Needs to be updated.
var EMAIL_TO_ENCRYPT = 'alfredwesterveld@gmail.com'; // Email to encrypt.
var email = require('email-verificationtoken').create(KEY);
var encrypted = email.encrypt(EMAIL_TO_ENCRYPT); 
var decrypted = email.decrypt(encrypted);
console.log(encrypted); // 1fb70bd0756ac12c496bcdd4b48586b027b89164850af100e0d50e80103cf367
console.log(decrypted); // alfredwesterveld@gmail.com
