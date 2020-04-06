var express = require('express');
var app = express();
const users = require('../controllers/usersController')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res, next) {
    users.getAll(req, res, next);
});

app.post('/authenticate', function(req, res, next) {
    users.authenticate(req,res, next);
});

module.exports = app;
