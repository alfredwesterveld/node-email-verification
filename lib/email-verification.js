var crypto = require('crypto');

var EmailVerification = function(secret) {
    this.cipher = crypto.createCipher('aes-256-cbc', secret);
    this.decipher = crypto.createDecipher('aes-256-cbc', secret);
};

EmailVerification.prototype.encrypt = function(text) {
    var crypted = this.cipher.update(text,'utf8','hex');
    crypted += this.cipher.final('hex');
    return crypted;

};

EmailVerification.prototype.decrypt = function(text) {
    var dec = this.decipher.update(text,'hex','utf8');
    dec += this.decipher.final('utf8');
    return dec;
};

module.exports.create = function(secret) {
    if (!secret) {
        throw Error('secret key missing');
    }
    return new EmailVerification(secret);
};
