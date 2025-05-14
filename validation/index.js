
const express = require("express");
const app = express();

app.use(express.json());

function name(req, res, next) {
  const username = req.body.username;
  const validation = /^[0-1A-Za-z]{5,17}$/; // Fixed regex syntax

  if (validation.test(username)) {
    next();
  } else {
    res.status(400).send("Invalid Name");
  }
}



function password(req,res, next){
  const password = req.body.password
  const validation = /^[0-1]{5,17}&/
  if(validation.test(password)){
    next()
  }else{
    res.status(400).send("invalid password")
  }
}

app.post("/", name,password, (req, res) => {  // Use POST instead of GET
  res.status(200).send("Username found");
});

app.listen(4000, () => console.log("Server is running on port 4000"));