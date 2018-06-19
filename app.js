// PACKAGES //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var icons = require('glyphicons');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// CREATE APP //
var app = express();

// MIDDLEWARE //
app.use(express.static(path.join(__dirname, 'build')));

// LOGGER //
app.use(logger('dev'));

// BODY PARSER //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

// ROUTES //
var auth = require('./routes/auth');
var book = require('./routes/book');
var listing = require('./routes/listing');
var profile = require('./routes/profile');
app.use('/api/auth', auth);
app.use('/api/book', book);
app.use('/api/listing', listing);
app.use('/api/user/profile', profile);

// ERROR HANDLER //
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// DATABASE //
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mern-crud', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// OPEN BROWSER //
var openBrowser = require('./scripts/openBrowser');
openBrowser('http://localhost:3000');

module.exports = app;
