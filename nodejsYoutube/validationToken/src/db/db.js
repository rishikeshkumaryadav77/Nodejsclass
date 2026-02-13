const mongoose = require("mongoose")

async function connectDB(){
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("database connected")
  } catch (error) {
    console.log("database not connected due to some", error)
  }
}


module.exports = connectDB