
//mens clothing category

const http = require("http");
const server = http.createServer(async(req, res) =>{
  let data = await fetch("https://fakestoreapi.com/products")
  let response =await data.json()
 
  const mensClothing = response.filter(product => product.category === "men's clothing");
  res.write(JSON.stringify(mensClothing));
  res.end();
  })

server.listen(3001, ()=>{
  console.log("server is running")
})