const mongoose = require("mongoose")


const createPostSchema = new mongoose.Schema({
  image:String,
  caption:String
})


const postModel = mongoose.model("post", createPostSchema);
module.exports = postModel
