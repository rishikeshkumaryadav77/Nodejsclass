const express = require("express")
const noteModel  = require("./model/note.model")

const app = express()
app.use(express.json())


app.post("/notes", async(req, res)=>{
  const data = req.body
  await noteModel.create({
    title:data.title,
    description:data.description
  })
  res.status(200).json({message:"data stored", data:data})
})

app.get("/notes", async(req, res)=>{
  const allData = await noteModel.find()
  res.status(200).json({message:"allData", data:allData})
})

app.delete("/notes/:id", async(req, res) =>{
  const id = req.params.id
  await noteModel.findOneAndDelete({
    _id:id
  })
  res.status(200).json({
    msg:"data deleted successfully"
  })
})

app.patch("/notes/:id", async(req, res) =>{
  const id = req.params.id
  const descrption = req.body.descrption
  await noteModel.findOneAndUpdate({_id:id}, {"description": descrption})

  res.status(200).json({msg:"updated the description"})
})




module.exports = app;


// sSdzBOGa0hBpdiWP --> clusterPassword   (completeBacked)