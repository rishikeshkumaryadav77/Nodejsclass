const mongoose = require("mongoose")


const schema = new mongoose.Schema({
  image:String,
  caption:String
})


const Model = mongoose.model("posted", schema)


module.exports = Model