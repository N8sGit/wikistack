var bodyParser = require('body-parser');
const express = require('express')
var wikiRouter = express.Router()
var models = require('../models')
var Page = models.Page;
var User = models.User;
// wikiRouter.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
// wikiRouter.use(bodyParser.json()); // would be for AJAX requests


wikiRouter.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

wikiRouter.post('/', function(req, res, next) {
	var title = req.body.title; 
	var content = req.body.content;

	var page = Page.create({
		title: title,
		content: content
	})
	.then(function(){ res.redirect(page.urlTitle) })
	
});

wikiRouter.get('/add', function(req, res, next) {
  res.render('addpage')
});




module.exports = wikiRouter
