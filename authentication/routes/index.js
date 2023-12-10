var express = require('express');
var router = express.Router();
var userModel= require('./users');
var ApiError= require('../utils/ApiError');
var ApiResponse= require('../utils/ApiResponse');
var passport= require('passport');
var localStrategy= require('passport-local').Strategy;

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

// login form
router.get('/login', function(req, res, next) {
  res.render('login');
});


// profile page
router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile');
});

// registers the user to website
router.post('/register', async function(req, res, next){
  console.log(req.body);
  let userData= {
    username: req.body.username,
    email: req.body.email
  };

  if(!req.body.username || !req.body.email || !req.body.password){
    throw new ApiError(302, "all fields need to filled");
  }
  
  let existedUser= await userModel.findOne({
    $or: [{username: userData.username}, {email: userData.email}]
  });
  if(existedUser) {
    console.log("user already exists");
    throw new ApiError(302, "useralready exist");
  }

  userModel.register(userData, req.body.password, function(err, user) {
    if (err) {
        return res.json(new ApiError(400, "user registration unsuccessfull", err));
    }
    
    passport.authenticate('local')(req, res, function(){
      res.status(200).json(new ApiResponse(200, "user registration successfull", user));
    })
  })
})

// login the user
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.json(new ApiResponse(200, "user login successfull", user));
})

router.get('/logout', function(req, res, next){
  req.logOut(function(err){
    if(err) return next(err);
    res.redirect("/login");
  })
})


function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('http://localhost:5173/register');
}

module.exports = router;