const mongoose = require("mongoose")

async function connectDB(){
  await mongoose.connect("mongodb://localhost:27017/completeBackend")
  console.log("DB connected")
}


module.exports = connectDB