const express = require("express")

const app = express()

//sending params seperately
// app.get("/user/:userId/book/:bokkId", (req, res)=>{
//   res.send(req.params)
//   console.log(req.params)
//   // console.log(req.params.bokkId)
// })


//sending params together
app.get("/user/:userId-:bokkId", (req, res)=>{
  res.send(req.params)
  console.log(req.params)
  // console.log(req.params.bokkId)
})


//query
app.get("/search", (req, res)=>{
  res.send(`search result name: ${req.query.name} age: ${req.query.age} city: ${req.query.city}`)
  console.log(req.query)
  // console.log(req.params.bokkId)
})

app.listen(4000, ()=>{
  console.log("server started")
});