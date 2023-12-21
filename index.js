const http = require("http");

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Set the status code to 301 (Moved Permanently)
  res.writeHead(301, { Location: "https://port-0-subs-iciy2almrigmyv.sel5.cloudtype.app/" });
  res.end();
});

// Listen on a specific port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
