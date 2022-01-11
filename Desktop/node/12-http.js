const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
  <h1>Oops! </h1>
  <p>no pages available</p>
  <a href='/'>back home</a>
  `);
});

server.listen(5000);
