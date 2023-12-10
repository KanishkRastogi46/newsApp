const mongoose= require('mongoose');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const dotenv= require('dotenv');

dotenv.config({path: './.env'});

//connecting to database
const connectDB= require('../db/index');
connectDB().then(()=>{})

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
    methods: {
        generateToken: async function(){
            return jwt.sign({
                id: this._id.toString(),
                username: this.username,
                email: this.email,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '30d'
            })
        }
    }
});


userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const hash_password= await bcrypt.hash(this.password, 10);
    this.password= hash_password;
})


module.exports= mongoose.model("User", userSchema);