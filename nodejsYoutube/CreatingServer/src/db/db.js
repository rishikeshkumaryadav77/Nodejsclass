const mongoose = require("mongoose")

async function connectDB(){
  await mongoose.connect("mongodb://localhost:27017/completeBackend")
  console.log("database completed")
}

module.exports = connectDB