const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
//const tweetBank = require('../tweetBank');
const client = require('../db/index.js');