const express= require('express');
const router= express.Router();
const userModel= require('../models/user-model');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//registration form page
// router.get('/', function(req, res){
//     res.render('register');
// })

// //login form page
// router.get('/login', function(req, res){
//     res.render('login');
// })

// //user profile page
// router.get('/profile', function(req, res){
//     res.render('profile', {userData: req.session.user});
// })


//registers the user and store its data to DB
router.post('/api/register', async function(req, res){
    console.log(req.body);

    let {username, email, password}= req.body;
    if(!username || !email || !password){
        req.json({message: "Either of the field is empty, please fill all the given fields", success: false});
    }

    let userExist= await userModel.findOne({username});
    if(userExist){
        res.json({message: "User already exist", success: false});
    }
    let hashPassword= await bcrypt.hash(password, 10);
    let user= await userModel.create({
        username,
        email, 
        password: hashPassword 
    })
    res.json({
        message: 'user registered successfully!',
        userdata: user,
        success: true
    })
})


//logins the user and sends it to profile page if the user details are correct
router.post('/api/login', async function(req, res){
    console.log(req.body);

    let {username, password}= req.body;
    if(!username || !password){
        res.json({message: "Either of the field is empty, please fill all the given fields", success: false});
    }
    
    let userExist= await userModel.findOne({username});
    if(!userExist){
        res.json({message: "Invaild user details or user not registered", success: false});
    }
    let correctPassword= await bcrypt.compare(password, userExist.password);
    if(correctPassword){
        let token= await jwt.sign({
            id: userExist._id.toString(),
            username: userExist.username
        }, 'hellomynaneiskanishkrastogilololol', {expiresIn: '30d'});
        res.cookie('refreshToken', token, {httpOnly: true})
                    .json({
                    message: 'login successfull',
                    refreshtoken: token,
                    success: true 
                    });
    }
    res.json({
        message: 'Invalid password',
        success: false
    });
})

//route for making protected routes in frontend
router.get('/api/auth', async function(req, res){
    let {refreshtoken}= req.cookies;
    if(!refreshtoken){
        res.json({
            message: "unauthenticated user",
            success: false
        })
    }else{
        let decodedToken= await jwt.verify(refreshtoken, 'hellomynaneiskanishkrastogilololol');
        let user= await userModel.findOne({username: decodedToken.username});
        if(!user){
            res.json({
                message: "invalid user",
                success: true
            })
        }
        res.json({
            message: "authenticated user",
            success: true
        })
    }
})

//for logging out the user
router.get('/api/logout', function(req, res){
    let {refreshtoken}= req.cookies;
    if(!refreshtoken){
        res.json({
            meessage: "logout unsuccessfull",
            success: false
        })
    }else{
        req.clearCookie('refreshtoken');
        res.json({
        message: "logout successfull",
        success: true
    })
    }
    
})

module.exports= router;