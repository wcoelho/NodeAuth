var express = require('express');
var app = express();
const sellers = require('../controllers/sellersController')

// respond with "hello world" when a GET request is made to the homepage
app.get('/list', function(req, res) {
    let response = sellers.getSellersList();
    res.send(response);
});

module.exports = app;
