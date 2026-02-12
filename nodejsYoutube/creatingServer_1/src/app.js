const express = require("express")
const Model = require("./model/notes.model")
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const app  = express()


app.use(express.urlencoded({ extended: true }));   //middlewaare for formurlencoded data only for text
app.use(express.json())                            //middle ware for the body row data   //rishi@123kumarR


const upload = multer({storage:multer.memoryStorage()})

// route--> curd operations

app.post("/create-post",upload.single("image"), async(req, res)=>{

  const result = await uploadFile(req.file.buffer)
  await Model.create({
    image:result.url,
    caption:req.body.caption
  })
  res.status(201).json({msg:"posted data successfu"})
  console.log(result)
  // console.log(req.body)
  // console.log(req.file)
})

app.get("/notes", async(req, res) =>{
  const data = await Model.find()
  res.status(200).json({msg:"allData fetched", data:data})
})


app.delete("/notes/:id", async(req, res) =>{
  const id = req.params.id
  await Model.findOneAndDelete(id)
  res.status(200).json({msg:"deleted successfull"})
})

app.patch("/notes/:id", async(req, res) =>{
  const id = req.params.id
  const {descrption} = req.body
  await Model.findOneAndUpdate({_id:id}, {"description":descrption})
  res.status(200).json({msg:"data updated"})
  console.log(descrption)
})





module.exports  = app