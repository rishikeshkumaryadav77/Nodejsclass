// var express = require("express");
// var app = express();
// var cors=require("cors");
// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// // raw -> json format
// app.post("/", (req, res) => {
//     console.log(req.body);
//   res.send({
//     data:req.body,
//     status:200
//   });
// });
// app.get("/reg" ,(req, res) => {
//   console.log();
//   res.send(req.body);
// });



//---------------express
var express = require("express");
var app = express();

// Middleware function (corrected)
function hello(req, res, next) {
  console.log("Hi, I am middleware");
  next(); // Pass control to the next middleware or route
}

// Before middleware
app.get("/", (req, res) => {
  res.send("I am fine");
});

// Applying middleware to a route
app.get("/reg", hello, (req, res) => {
  res.send("Hiiii");
});

app.listen(3008, () => {
  console.log("Hi, server started on port 3008");
});