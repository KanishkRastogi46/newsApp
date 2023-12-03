var express = require('express');
var router = express.Router();
var userModel= require('./users');
var passport= require('passport');
var localStrategy= require('passport-local');

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

// login form
router.get('/login/details', function(req, res, next) {
  res.render('login');
});


// profile page
router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile');
});

// registers the user to website
router.post('/register', async function(req, res){
  let userData= new userModel({
    username: req.body.username,
    email: req.body.email
  })

  if([req.body.username, req.body.email, req.body.password].some((curVal)=>curVal?.trim()==='')){
    res.json({
      error: "Both username and password required"
    })
  }
  
  let existedUser= await userModel.findOne({
    $or: [{username: req.body.username}, {email: req.body.email}]
  });
  if(existedUser) {
    res.json({error: "User already exists"});
    throw new Error("User already exists");
  }

  userModel.register(userData, req.body.password, function(err, user) {
    if (err) {
        return res.render('register', { user : user });
    }
    
      passport.authenticate('local')(req, res, function(){
        res.redirect('/profile');
    })
  })
})

// login the user
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/profile');
})

router.get('/logout', function(req, res, next){
  req.logOut(function(err){
    if(err) return next(err);
    res.redirect("/login/details");
  })
})


function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}

module.exports = router;