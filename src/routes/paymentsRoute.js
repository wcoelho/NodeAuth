var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/success', function(req, res) {
    res.send('hello world 2');
});

app.get('/pending', function(req, res) {
    res.send('hello world 3');
});

module.exports = app;

app.get('/failure', function(req, res) {
    res.send('hello world 4');
});

app.get('/checkout/:id/:email/:description/:amount', function(req, res) {
    res.send('hello world 4');
});

