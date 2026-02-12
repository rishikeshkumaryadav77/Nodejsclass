const app = require("./src/app")
const connectDB = require("./src/db/connectDB")
connectDB()



app.listen(4000, ()=>{
  console.log("server started")
})