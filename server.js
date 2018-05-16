// Require/import the HTTP module
const http = require("http");

// Define a port to listen for incoming requests
const PORT1 = 7000;

// Create a generic function to handle requests and responses
function handleRequest1(request, response1) {

  // Send the below string to the client when the user visits the PORT URL
  response1.end("You are amazing!");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server1 = http.createServer(handleRequest1);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});







const PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest2(request, response2) {

  // Send the below string to the client when the user visits the PORT URL
  response2.end("you suck!");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server2 = http.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server2.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});
