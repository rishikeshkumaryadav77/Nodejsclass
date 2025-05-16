const express = require('express')
const app = express()
const port  = 4000

app.get('/product/:Id', (req, res) =>{
  const {Id} = req.params
  console.log(Id)
  const product = {
    id: 1,
    name:"samsung"
  }

  res.status(200).json({
    success:true,
    product,
  });

})



app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})