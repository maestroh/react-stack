'use strict';

var express = require('express');
var path = require('path');

function init(app){
	app.use('/', require('../app/index.js'));
}

module.exports.init = init