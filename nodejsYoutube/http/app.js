const http = require('http');
const server = http.createServer((req, res) => {
  //  console.log(`Request received: ${req.method} ${req.url}`);
   res.end('hello');
});

server.listen(8000, () => {
   console.log('Server started on port 8000');
});
