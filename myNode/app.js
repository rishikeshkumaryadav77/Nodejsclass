import express from "express"
import cookieParser from "cookie-parser"

const app = express()
app.use(cookieParser())


// cookies
app.get('/', (req, res) =>{
  res.cookie("hello", "cookie", {maxAge: 36000})
  res.send("cookies created")
})


app.get('/fetch', (req, res) =>{
  console.log(req.cookies)
  res.send("cookies shown")
})




app.listen(4000, () =>{
  console.log("server running on https://localhost:4000")
})