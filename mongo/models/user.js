var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var user = new Schema({
    name: String,
    age: Number
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', user);

// make this available to our users in our Node applications
module.exports = User;