const userModel = require("../models/users.model")
const jwt = require("jsonwebtoken")

async function userRegister(req,res) {
  const {userName, email, password} = req.body
  const userData = await userModel.create({
    userName,
    email,
    password
  });

  

  const token = jwt.sign({id : userData._id}, process.env.JWT_SECERET_KEY);
  res.cookie("token", token)
  res.status(201).json({msg:"data posted successfully", userData, token})
  

}


module.exports = {userRegister}