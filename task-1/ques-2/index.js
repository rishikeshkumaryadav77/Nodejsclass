const http = require("http");
const server = http.createServer((req, res)=>{
  var body = "";
  req.on("data",(chunk)=>{
    body += chunk;
  });
  req.on("end", ()=>{
    console.log(body)
    res.write(body)
    res.end()
  });
});

server.listen("3008", ()=>{
  console.log("server started")
})
