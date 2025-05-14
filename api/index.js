


// all category

const http = require("http");
const server = http.createServer(async(req, res) =>{
  let data = await fetch("https://fakestoreapi.com/products")
  let response =await data.json()
  
  res.write(JSON.stringify(response));
  res.end();
  })

server.listen(3004, ()=>{
  console.log("server is running")
})