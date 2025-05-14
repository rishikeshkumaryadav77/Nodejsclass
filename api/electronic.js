


//electronic category
const http = require("http");
const server = http.createServer(async(req, res) =>{
  let data = await fetch("https://fakestoreapi.com/products")
  let response =await data.json()
 
  const mensClothing = response.filter(product => product.category === "electronics");
  res.write(JSON.stringify(mensClothing));
  res.end();
  })

server.listen(3003, ()=>{
  console.log("server is running")
})