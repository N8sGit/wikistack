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

	 Page.create({
		title: title,
		content: content
	})
	.then(function(results){ res.redirect(results.urlTitle) })

});

wikiRouter.get('/add', function(req, res, next) {
  res.render('addpage')
});

wikiRouter.get(':urlTitle', function(req, res, next){
  res.send('hit dynamic route at' + res.body.params.urlTitle)
})

wikiRouter.get('/:urlTitle', function (req, res, next) {

  Page.findOne({
    where: {
      urlTitle: req.params.urlTitle
    }
  })
  .then(function(foundPage){
    return  res.json(foundPage).then(function(result){
      res.render('wikipage', {result: result.title, content: result.content})
    });
  })
  .catch(next);

});


module.exports = wikiRouter
