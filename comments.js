//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var port = 3000;
var comments = [];

// Serve static files
app.use(express.static(__dirname + '/public'));

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// GET /comments
app.get('/comments', function(req, res) {
    console.log('GET /comments');
    res.status(200).json(comments);
});

// POST /comments
app.post('/comments', function(req, res) {
    console.log('POST /comments');
    var comment = {