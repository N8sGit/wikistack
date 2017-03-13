const express = require('express')
const morgan = require('morgan')
const wikiRouter = require('./wiki');
const userRouter = require('./user');
// ...
// or, in one line: router.use('/wiki', require('./wiki'));
var router = express.Router()
router.use('/wiki', wikiRouter);







module.exports = router

