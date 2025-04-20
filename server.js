const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    res.writeHead(200);
    res.end('This is home Page.');
  } else if (url === '/student') {
    res.writeHead(200);
    res.end('This is student Page.');
  } else if (url === '/admin') {
    res.writeHead(200);
    res.end('This is admin Page.');
  } else if (url === '/data') {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Hello World JSON' }));
  } else {
    res.writeHead(404);
    res.end('Page not found.');
  }
});

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});