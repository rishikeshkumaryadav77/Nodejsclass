const http = require("http");
let fs = require("fs")
const server = http.createServer((req, res)=>{
  var body = "";
  req.on("data",(chunk)=>{
    body += chunk;
  });
  req.on("end", ()=>{
    console.log(body)
    res.write(body)
    fs.appendFileSync("db.json", JSON.stringify(body))
    res.end()
  });
});

server.listen("3008", ()=>{
  console.log("server started")
})

