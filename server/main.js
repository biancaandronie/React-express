var express = require('express');
var mongoose = require('mongoose');

var app = new express();
const port = 7777;


//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/app-database';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

var User = require('../mongo/models/user');

User.find({}, function(err, users) {
    if (err) throw err;

    // object of all the users
    console.log("All users: " + users);
});

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/',function(req,res){
    res.render('./../app/index.ejs',{});
})
    .use(express.static(__dirname + '/../.tmp'));

app.get('/users',function(req,res){
    User.find({}, function(err, users) {
        if (err) throw err;

        res.send({ express: users });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
