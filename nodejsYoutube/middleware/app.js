const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');

dotenv.config()
const app = express()


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.post('/body', (req, res) =>{
  const body = req.body
  console.log(body)
  res.status(200).json({
    success : true,
    message: "Account created successfully"
  });
})



app.listen(process.env.PORT, () =>{
  console.log(`http://localhost:${process.env.PORT}`)
})