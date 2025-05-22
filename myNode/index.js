const express = require("express")
const multer = require('multer')
const app = express()

// urlencoded sended data
app.use(express.urlencoded({extended:true}))

//for data sended
const upload = multer()
// app.use(upload.array()) //onlu used for text
app.use(upload.single('image'))  //used for file as well as

//diret access file bu hitting the url on the server
app.use('/upload',express.static('upload'))

app.get("/", (req,res) =>{
  res.send('home page')
})


//form data
app.post("/form", (req, res)=>{
  const data = req.body
  console.log(data)
  res.send("dta submitted successfully")
})

app.listen(8000, ()=>{
  console.log("server runs on => http://localhost:8000")
})