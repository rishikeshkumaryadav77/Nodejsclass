const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url==="/"){
    res.write(`
   <html lang="en">
      <head>
        <title>Myntra</title>
      </head>
      <body>
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="men">Men</a></li>
          <li><a href="women">Women</a></li>
          <li><a href="cart">Cart</a></li>
        </ul>
      </body>
   </html>
    `)
    res.end()

  }
  
    else if(req.url==="/home"){
      res.write("welcome to the home")
      res.end()
    }
    else if(req.url==="/men"){
      res.write("welcome to the men")
      res.end()
    }
    else if(req.url==="/women"){
      res.write("welcome to the women")
      res.end()
    }
    else if(req.url==="/kid"){
      res.write("welcome to the kid")
      res.end()
    }
    else if(req.url==="/cart"){
      res.write("welcome to the cart")
      res.end()
    }
    else{
      res.writeHead(404, {'Content-Type': 'text/html'})
      res.write("404 page is not found")
      res.end()
    }
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});

