const fs = require("fs"); // File System
const http = require("http"); // Networking Capabilities
const url = require("url"); // URL functionality & Routing

///////////////////////////////////////////////////////////////

// FILES

///////////////////////////////////////////////////////////////

// SERVER
const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("Hello! This is the overview");
  } else if (pathName === "/product") {
    res.end("Hello! This is the product");
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world", // Use as meta-data for the response itself.
    });
    res.end("<h1>Page cannot be found</h1>"); // 404: http error code.
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening for request on port 8000");
});

// To access a server on the local machine: 127.0.0.1:8000
///////////////////////////////////////////////////////////////
