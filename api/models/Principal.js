const mongoose = require('mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const PrincipalSchema  = new mongoose.Schema({
    name : {type:String, required:'Please provide a name', lowercase:true, trim:true},
    email : {type:String, required:'Please provide an email ', lowercase:true, trim:true},
    hash:String,
    salt:String,
});

PrincipalSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(256).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString("hex");
  };
  
  PrincipalSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,'sha512').toString("hex");
    return this.hash === hash;
  };
  
  PrincipalSchema.methods.generateJwt = function() {
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000),
    }, process.env.SECRET); // DO NOT KEEP YOUR SECRET IN THE CODE!
  };
  
  PrincipalSchema.plugin(mongodbErrorHandler);

  module.exports = mongoose.model('Principal',PrincipalSchema);