'use strict';
var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var app = React.createElement(require('./app.js'));

var render = function(req, res){

  var str = ReactDOMServer.renderToString(app);
  res.set('Content-Type', 'text/html');
  res.send(str);
  res.end();
};


router.get('/', render);

module.exports = router;