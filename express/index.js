// //client to server by using node.js
// const http = require("http");
// const server = http.createServer((req, res)=>{
//   var body = "";
//   req.on("data",(chunk)=>{
//     body += chunk;
//   });
//   req.on("end", ()=>{
//     console.log(body)
//     res.write(body)
//     res.end("ended")
//   });
// });

// server.listen("4000", ()=>{
//   console.log("server started")
// })

//client to server by using express.js
var express = require("express");
var cors = require("cors");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS

app.post("/", (req, res) => {
  res.send({
    data: req.body,
    status: 200,
    msg: "successful",
  });
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});