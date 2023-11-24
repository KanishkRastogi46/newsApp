const { Password } = require('@mui/icons-material');
var mongoose= require('mongoose');
var plm= require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:271017/newsdb");

const userSchema= new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: Password,
    required: true
  }
})

mongoose.plugin(plm);

module.exports = mongoose.model("User", userSchema);
