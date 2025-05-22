const express = require("express")
const app = express()

//diret access file bu hitting the url on the server
app.use('/upload',express.static('upload'))

app.get("/", (req,res) =>{
  res.send('home page')
})


app.listen(8000, ()=>{
  console.log("server runs on => http://localhost:8000")
})