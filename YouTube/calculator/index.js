const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;

  // Home Page
  if (req.url === '/' || req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
      <head><title>Home Page</title></head>
      <body style="font-family: Arial; text-align:center; margin-top:50px;">
        <h2>  Welcome to the Home Page</h2>
        <a href="/calculator">Go to Calculator</a>
      </body>
      </html>
    `);
    res.end();
  }

  // Calculator Page
  else if (req.url === ('/calculator') || req.url ===("/?")) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
      <head><title>Node.js Calculator</title></head>
      <body style="font-family: Arial; text-align:center; margin-top:50px;">
        <h2>Simple Calculator</h2>
        <form action="/calculator" method="GET">
          <input type="number" name="num1" placeholder="Enter first number" required>
          <input type="number" name="num2" placeholder="Enter second number" required>
          <button type="submit">Add</button>
        </form>
    `);

    // Perform addition if numbers are provided
    if (query.num1 && query.num2) {
      const num1 = parseFloat(query.num1);
      const num2 = parseFloat(query.num2);
      const sum = num1 + num2;
      res.write(`<h3>Result: ${num1} + ${num2} = <b>${sum}</b></h3>`);
    }

    res.write(`<br><a href="/">Back to Home</a>`);
    res.write(`</body></html>`);
    res.end();
  }

  // 404 Page
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write(`<h3>404 Page Not Found</h3>`);
    res.end();
  }
});

server.listen(5000, () => {
  console.log('✅ Server running at http://localhost:5000');
});
