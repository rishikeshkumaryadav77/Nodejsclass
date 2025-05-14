


const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const customHeader = req.headers['x-custom-header'];

    if (customHeader === 'approved') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('Success: Custom header approved.');
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end('Error: Missing or incorrect custom header.');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' }); 
    res.end('Error: Method not allowed.');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on ${port}......`);
});