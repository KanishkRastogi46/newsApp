const express= require('express');
const router= express.Router();
const userModel= require('../models/user-model');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


//registers the user and store its data to DB
router.post('/api/register', async function(req, res){
    console.log(req.body);

    let {username, email, password, confirmPassword}= req.body;
    if(!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
        return req.json({message: "Either of the field is empty, please fill all the given fields", success: false});
    }

    if (password != confirmPassword) return res.json({message: "Password and confirm password don't match", success : false});

    let userExist= await userModel.findOne({
        $or : [
            {email : email},
            {username : username}
        ]
    });
    if(userExist) return res.json({message: "User already exist", success: false});

    let hashPassword= await bcrypt.hash(password, 10);
    let user= await userModel.create({
        username,
        email, 
        password: hashPassword 
    })
    return res.json({
        message: 'user registered successfully!',
        userdata: user,
        success: true
    })
})


//logins the user and sends it to profile page if the user details are correct
router.post('/api/login', async function(req, res){
    console.log(req.body);

    let {username, password}= req.body;
    if(!username.trim() || !password.trim()){
        return res.json({message: "Either of the field is empty, please fill all the given fields", success: false});
    }
    
    let userExist= await userModel.findOne({username});
    if(!userExist){
        return res.json({message: "Invaild user details or user not registered", success: false});
    }
    let correctPassword= await bcrypt.compare(password, userExist.password);
    if(correctPassword){
        let token= await jwt.sign({
            id: userExist._id.toString(),
            username: userExist.username
        }, process.env.JWT_SECRET_KEY, {expiresIn: '30d'});

        return res.json({
                    message: 'login successfull',
                    refreshtoken: token,
                    success: true 
                });
    }
    return res.json({
        message: 'Invalid password',
        success: false
    });
})

//route for making protected routes in frontend
router.post('/api/auth', async function(req, res){
    let {refreshtoken}= req.body;
    if (!refreshtoken) {
        return res.json({
            message: "unauthenticated user",
            success: false
        })
    }
    let decodedToken= await jwt.verify(refreshtoken, process.env.JWT_SECRET_KEY);
    let user= await userModel.findOne({username: decodedToken.username});
    if(!user){
        return res.json({
            message: "invalid user",
            success: true
        })
    }
    return res.json({
        message: "authenticated user",
        success: true
    })
})

//for logging out the user
router.post('/api/logout', function(req, res){
    let {refreshtoken}= req.body;
    if(!refreshtoken){
        return res.json({
            meessage: "logout unsuccessfull",
            success: false
        })
    }
    return res.json({
        message: "logout successfull",
        success: true
    })
})

module.exports= router;