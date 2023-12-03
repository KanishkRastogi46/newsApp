var mongoose= require('mongoose');
var plm= require('passport-local-mongoose');
const connectDB = require('../db/index');

//mongoose.connect("mongodb://127.0.0.1:27017/testing");
connectDB().then(function(value){
  console.log("Database connected successfully!! at", value.connection.host);
}).catch(function(err){
  console.log("Error:",err);
})

const userSchema= mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

userSchema.plugin(plm);

const userModel= mongoose.model("User", userSchema);

module.exports= userModel;