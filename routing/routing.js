let http = require("http");
let server = http.createServer((req,res)=>{
  if(req.url=="/fake" && req.method=="GET"){
    fetch("https://fakestoreapi.com/products/1").then((val)=>{
      return val.json()
    }).then((val)=>{
      res.write(JSON.stringify(val))
      res.end()
    })
  }
  else{
    fetch("https://dummyjson.com/products/1").then((val)=>{
      return val.json()
    }).then((val)=>{
      res.write(JSON.stringify(val))
      res.end()
    })
  }
})

server.listen(3000, ()=>{
  console.log("server is runnig")
})