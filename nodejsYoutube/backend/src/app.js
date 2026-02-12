const express = require("express")
const Model = require("./models/post.model")
const multer = require("multer")
const uploadImage = require("./services/post.service")
const app = express()

const upload = multer({storage:multer.memoryStorage()})


app.post("/create-post",upload.single("image"), async(req, res)=>{
  const result = await uploadImage(req.file.buffer)
  const data = Model.create({
    image:result.url,
    caption:req.body.caption
  })
  res.status(200).json({msg:"data posted successfully"})
})

app.get("/get-post", async(req, res)=>{
  const data = await Model.find()
  res.status(200).json({msg:"data fetched successfully", data:data})
})


module.exports = app