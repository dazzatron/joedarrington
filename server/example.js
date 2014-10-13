var http = require('http');
var express = require('express');
var app = express();

// api
app.get('/', function (req, res) {
    res.send('yo');
});

app.get('/test2', function (req, res) {
    res.send('Hello boom 2!');
});

console.log('running');

app.listen(3000);
