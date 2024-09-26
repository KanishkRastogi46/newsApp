const mongoose= require('mongoose');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const dotenv= require('dotenv');

dotenv.config({path: './.env'});

//connecting to database
// const connectDB= require('../db/index');
// connectDB();

//creating user schema
const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
});


// userSchema.pre('save', async function(next){
//     if(!this.isModified('password')){
//         next();
//     }
//     const hash_password= await bcrypt.hash(this.password, 10);
//     this.password= hash_password;
// })


module.exports= mongoose.model("User", userSchema);