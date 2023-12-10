const express= require('express');
const router= express.Router();
const userModel= require('../models/user-model');
const bcrypt= require('bcrypt');

//registration form page
router.get('/', function(req, res){
    res.render('register');
})

//login form page
router.get('/login', function(req, res){
    res.render('login');
})

//user profile page
router.get('/profile', function(req, res){
    res.render('profile', {userData: req.session.user});
})


//registers the user and store its data to DB
router.post('/api/register', async function(req, res){
    console.log(req.body);

    let {username, email, password}= req.body;
    if(!username || !email || !password){
        req.json({message: "Either of the field is empty, please fill all the given fields"});
    }

    let userExist= await userModel.findOne({username});
    if(userExist){
        res.json({message: "User already exist"});
    }

    let user= await userModel.create({
        username, email, password
    })
    if(user){
        req.session.user= {username, email};
        res.redirect('http://localhost:5173');
    }
})


//logins the user and sends it to profile page if the user details are correct
router.post('/api/login', async function(req, res){
    console.log(req.body);

    let {username, password}= req.body;
    if(!username || !password){
        req.json({message: "Either of the field is empty, please fill all the given fields"});
    }
    
    let userExist= await userModel.findOne({username});
    if(!userExist){
        res.json({message: "Invaild user details or user not registered"});
    }

    let correctPassword= await bcrypt.compare(password, userExist.password);
    if(correctPassword){
        req.session.user= {username};
        /*res.json({
            message: "login successfull",
            token: await userExist.generateToken(),
        });*/
        res.redirect('http://localhost:5173');
    }
    else{
        res.json({message: "Invalid user details or user not registered"});
    }
})


//for logging out the user
router.get('/api/logout', function(req, res){
    res.redirect('http://localhost:5173/login');
})

module.exports= router;