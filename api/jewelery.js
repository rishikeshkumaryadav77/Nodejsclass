

//jewelery category
const http = require("http");
const server = http.createServer(async(req, res) =>{
  let data = await fetch("https://fakestoreapi.com/products")
  let response =await data.json()
 
  const mensClothing = response.filter(product => product.category === "jewelery");
  res.write(JSON.stringify(mensClothing));
  res.end();
  })

server.listen(3005, ()=>{
  console.log("server is running")
})