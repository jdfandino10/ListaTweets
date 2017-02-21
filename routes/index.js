var express = require('express');
var objs = require('./tweets.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tweets: objs.tweets });
});

module.exports = router;
