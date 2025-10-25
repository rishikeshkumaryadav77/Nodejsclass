const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse URL and query parameters
  const query = url.parse(req.url, true).query;

  // Home page: show input form
  if (req.url === '/' || req.url.startsWith('/?')) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
      <head><title>Node.js Calculator</title></head>
      <body style="font-family: Arial; text-align:center; margin-top:50px;">
        <h2>Simple Calculator</h2>
        <form action="/" method="GET">
          <input type="number" name="num1" placeholder="Enter first number" required>
          <input type="number" name="num2" placeholder="Enter second number" required>
          <button type="submit">Add</button>
        </form>
    `);

    // If both numbers exist, calculate sum
    if (query.num1 && query.num2) {
      const num1 = parseFloat(query.num1);
      const num2 = parseFloat(query.num2);
      const sum = num1 + num2;
      res.write(`<h3>Result: ${num1} + ${num2} = <b>${sum}</b></h3>`);
    }

    res.write(`</body></html>`);
    res.end();
  }
});

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
