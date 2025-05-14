// question-1
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathSegments = parsedUrl.pathname.split('/').filter(segment => segment);
    
    if (pathSegments.length === 2 && pathSegments[0] === 'user') {
        const userId = pathSegments[1];
        const { name, age } = parsedUrl.query;
        
        const response = {
            id: userId,
            name: name || 'Rishi',
            age: age || '26'
        };
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
