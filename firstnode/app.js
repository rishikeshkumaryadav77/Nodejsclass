const express = require("express")
const app = express()

app.use(express.json())

//middleware
const middleware = (req, res, next) =>{
  console.log("Middleware executed")
  next()
}
app.use(middleware)
// app.use(function(req, res,next) => {
//   console.log("middlieware")
// })

//body params
app.post("/login", (req,res) => {
  const data = (req.body)
  res.send("login successfully")
  console.log(data)
})


//query params
app.post("/search", (req,res) => {
  const data = (req.query)
  res.send("search successfully")
  console.log(data)
})


// params
app.post("/:id", (req,res) => {
  const data = (req.params)
  res.send("id successfully")
  console.log(data.id)
})

app.listen(8000, () => {
  console.log('http://localhost:8000')
})