var express = require('express');
var router = express.Router();
var test = "a";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expresssss', div: test});
});

module.exports = router;
