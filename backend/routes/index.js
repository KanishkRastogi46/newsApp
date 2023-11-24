var express = require('express');
var router = express.Router();
var localStrategy= require('passport-local');
var passport= require('passport');
var userModel= require('./users');

passport.use(new localStrategy(passport.authenticate('local', userModel)));
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
