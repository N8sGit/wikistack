'use strict';
var express = require('express');
var app = express();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var routes = require('./routes');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var bodyParser = require('body-parser');
var models = require('./models');
// templating boilerplate setup
app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

// static and dynamic routing
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', routes);

// start the server

Page.sync();
User.sync()


models.User.sync({})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    server.listen(3000, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);

//Not sure if ^^^ we should wrap the listener on line 47 in this .sync or if server should be named app

app.listen(3000, function(){
  console.log('listening on port 1337');
});

// // manually-written static file middleware
// app.use(function(req, res, next){
