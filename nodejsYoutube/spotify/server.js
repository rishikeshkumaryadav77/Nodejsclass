require("dotenv").config()
const connectDB = require("./src/db/db")
const app = require("./src/app")

connectDB()




app.listen(4000, ()=>{
  console.log("server started")
})