const http = require("http");

const host = "localhost";
const port = "8000";

const requestListner = function(req, res) {
  res.setHeader("Content-Type", "application/json");
  switch(req.url) {
    case "/hello": 
      res.writeHead(200);
      res.end("Hello World");
      break;
    case "/list": 
      res.writeHead(200);
      const data = JSON.stringify({name: "Foo"});
      res.end(data);
      break;
    default:
      res.writeHead(404);
      res.end("Not found");
  }
};

const server = http.createServer(requestListner);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});





