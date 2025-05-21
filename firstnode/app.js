const express = require("express")
const app = express()

app.use(express.json())

//body params
app.post("/login", (req,res) => {
  const data = (req.body)
  res.send("login successfully")
  console.log(data.name)
})


//query params
app.post("/search", (req,res) => {
  const data = (req.body)
  res.send("search successfully")
  console.log(data.name)
})


app.listen(8000, () => {
  console.log('http://localhost:8000')
})