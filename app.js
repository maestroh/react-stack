process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');

//var config = require('./config/environment');

var app = express();
require('./config/routes.js').init(app);

var server = require('http').createServer(app);

server.listen('8081', 'localhost', () => console.log('Running') );

