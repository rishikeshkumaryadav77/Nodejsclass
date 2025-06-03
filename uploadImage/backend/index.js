const express = require('express')
const multer = require('multer')
const app = express()

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) =>{
    cb(null, file.fieldname+"-"+Date.now()+file.originalname)
  }
})

const upload = multer({storage})

//mogodb



app.get('/', (req, res) =>{
  res.send('Hello World')
})

app.post('/upload',upload.single('img'),(req, res) =>{
  res.send('uploded')
  console.log(req.file)
})






app.listen(8000, ()=>{
  console.log('server started http://localhost:8000')
})





