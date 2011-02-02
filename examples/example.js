// To create secret token for email adress.
var email = require('email-verificationtoken');
var KEY = '123'; // Needs to be updated.
var EMAIL_TO_ENCRYPT = 'alfredwesterveld@gmail.com'; // Email to encrypt.
var encryptEmail = email.create(KEY);
var encrypted = encryptEmail.encrypt(EMAIL_TO_ENCRYPT); 
var decrypted = encryptEmail.decrypt(encrypted);
console.log(encrypted); // 1fb70bd0756ac12c496bcdd4b48586b027b89164850af100e0d50e80103cf367
console.log(decrypted); // alfredwesterveld@gmail.com
