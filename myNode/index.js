// const express = require("express")
// const multer = require('multer')
// const mongoose = require('mongoose')
// const app = express()

// // urlencoded sended data
// app.use(express.urlencoded({extended:true}))

// //storage
// const storage = multer.diskStorage({
//   destination: './upload',
//   filename:(req, file, cb) => {
//     cb(null, file.fieldname+'_'+Date.now()+file.originalname)
//   }
// })

// //for data sended
// const upload = multer({storage} )
// // app.use(upload.array()) //onlu used for text
// app.use(upload.single('image'))  //used for file as well as

// //diret access file bu hitting the url on the server
// app.use('/upload',express.static('upload'))

// app.get("/", (req,res) =>{
//   res.send('home page')
// })


// //form data
// app.post("/form", (req, res)=>{
//   const data = req.body
//   console.log(data)
//   console.log(req.file)
//   res.send("dta submitted successfully")
// })

// const express = require('express')
// const multer = require('multer')

import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
const app =express()

app.use(express.json())
//mongoose


await mongoose.connect('mongodb://localhost:27017/myDb').then(() =>{
  console.log("mongo connected")
})

const schema = new mongoose.Schema({
  name:String,
  age:Number,
  email:String
})

const Person = mongoose.model('Person', schema)

//row data  storing in mongo db
app.post("/user", async(req, res) => {
  res.send('row data submitted')
  const {name, age, email}= req.body
  console.log(req.body)
  const data = new Person(
    {
      name,
      age,
      email
    }
  )
  await data.save()
  console.log(data)
})

//row data  updating in mongo db
app.put("/update", async(req, res) => {
  res.send('row data updated')
  const {id}= req.body
  // console.log(req.body)
  const data = await Person.findById(id)
  data.name = "yadav"
  
  await data.save()
  console.log(data)
})



//form data
app.post("/form", (req, res) => {
  res.send('form data submitted')
  console.log(req.body)
  console.log(req.file)
})





app.listen(8000, ()=>{
  console.log("server runs on => http://localhost:8000")
})