// Imports
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var cors = require('cors');
var app = express();

// Server initialisation
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

// Initial push - check when client connects
app.get('/', function (req, res) {
  console.log('Client recieved.');
});

// Listen on specified port
app.listen(process.env.PORT || 8080);