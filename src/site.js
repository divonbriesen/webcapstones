var http = require('http');
var fileSystem = require('fs');
var express = require('express');

var app = express();

var indexPageBuffer = fileSystem.readFileSync('index.html');

app.use(express.static('.'));

var server = app.listen(3000);

console.log("Website is running . . .");