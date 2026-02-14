const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function userRegister(req, res) {        //this function is basically for user/artist login
  const {userName, email, password, role="user"} = req.body


  const isUserAlreadyExists = await userModel.findOne({   //is checking wheather userExisting or not
    $or:[
      // {userName},
      {email}
  ]
  });

  if(isUserAlreadyExists){
    res.status(409).json({msg:"user already exists"})
  }

  const passHashing = await bcrypt.hash(password, 10)
  console.log("hasing", passHashing)

  const userData = await userModel.create({
    userName,
    email,
    password:passHashing,
    role
  })
  

  
  const token = jwt.sign({id:userData._id}, process.env.JWT_SECERET_KEY)
  console.log("SIGN SECRET:", process.env.JWT_SECERET_KEY);

  res.cookie("token", token)
  res.status(201).json({msg:"successfull"})

}

async function userLogin(req, res) {       //user register

  const {userName, email, password} = req.body
  const user = await userModel.findOne({
    $or:[
      {userName},
      {email}
    ]
  })

  if(!user){
    return res.status(409).json({msg:"Invalid Credentials"})
  }


  const passwordVerify = bcrypt.compare(password, user.password)

  if(!passwordVerify){
    return res.status(409).json({msg:"Invalid Credentials"})
  }

  const token = jwt.sign({id:user._id}, process.env.JWT_SECERET_KEY);
  console.log("token generated", process.env.JWT_SECERET_KEY)
  res.cookie("token", token)

  res.status(200).json({msg:"Login Successfull",
    id:user._id,
    username: userName,
    email: email
  })
 
}


module.exports = {userRegister, userLogin}