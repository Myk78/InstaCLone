const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/instawalaclone");

const userschema = mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  bio:String,
  picture:{
    type: String, // URL or path to the profile image
    default: ''
  },
  posts:[{ type:mongoose.Schema.Types.ObjectId, ref: "post"} ]
});
userschema.plugin(plm);
module.exports = mongoose.model("user",userschema);