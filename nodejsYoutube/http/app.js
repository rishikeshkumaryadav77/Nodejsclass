const http = require('http');
const server = http.createServer((req, res) => {
  //  console.log(`Request received: ${req.method} ${req.url}`);
   if(req.url === '/'){
    res.end('hello');
   }
   else if(req.url === '/user'){
    const user = {
      name:'shiva',
      age:15,
      address:'hyderabad'
    }
    console.log(user)
    res.writeHead(200, {'Content-Type':'application/json'}) //provide pretty
    res.end(JSON.stringify(user))
    
   }
   else if(req.url === '/login'){
    res.end('login successful')
   }
   else if(req.url === '/post'){
    console.log('post method')
    res.end("post methhod")
   }
   else{
    res.end('bad req')
   }
   
});





server.listen(8000, () => {
   console.log('Server started on port 8000');
});
