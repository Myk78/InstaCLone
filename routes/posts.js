const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/instawalaclone");

const postschema = mongoose.Schema({
picture:String,
caption:String,
user: {
  type: mongoose.Schema.Types.ObjectId,
  ref:"user",
},
data: {
  type: Date,
  default: Date.now,
},
like: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "user",
},

});
module.exports = mongoose.model("post",postschema);