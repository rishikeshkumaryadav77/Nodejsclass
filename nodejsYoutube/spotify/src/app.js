const express = require("express")
const userRegister = require("./routes/auth.routes")
const cookieParser = require("cookie-parser")
const app = express()


app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", userRegister)



module.exports = app;