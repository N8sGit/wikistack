const express = require('express')
const morgan = require('morgan')
const wikiRouter = require('./wiki');
const userRouter = require('./user');
var router = express.Router()
router.use('/wiki', wikiRouter);

router.get('/', function(req, res, next) {
	res.redirect('/')
});





module.exports = router

