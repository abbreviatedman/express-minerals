const express = require("express");
const app = express();
const rock = require("./models/rock");

// Routes

// the / route
app.get("/", (request, response) => {
  console.log("GET request received to route: /");
  response.send("Welcome to Express Minerals App. You rock.");
});

// Send all the rocks.
app.get("/rocks", (request, response) => {
  console.log("GET request received to route: /rocks/colin");
  response.send(rock);
});

// Send a specific rock using URL params.
app.get("/rocks/:index", (request, response) => {
  console.log("GET request received to route: /rocks/:index");
  const index = request.params.index;
  // or, with deconstruction:
  // const { index } = request.params;
  response.send(rock[index]);
});

// Using multiple URL params.
app.get("/:greeting/:firstName/:lastName", (request, response) => {
  console.log("GET request to /hello/:firstName/:lastName");
  const firstName = request.params.firstName;
  const lastName = request.params.lastName;
  // Or, using destructuring:
  // const { firstName, lastName } = request.params;
  response.send(`Hello, ${firstName} ${lastName}.`);
  // Or comment out the above line and comment in the below lines for a version that capitalizes the names:
  // const fullName =
  //   firstName[0].toUpperCase() +
  //   firstName.slice(1) +
  //   " " +
  //   lastName[0].toUpperCase() +
  //   lastName.slice(1);
  // response.send(greeting + ", " + fullName);
});

// Using query params, like in the following request:
// http://localhost:3003/add?num1=5&num2=4
app.get("/add", (request, response) => {
  console.log("GET to /add");
  // Regular way.
  // const num1 = request.query.num1;
  // const num2 = request.query.num2;
  // Or, using destructuring:
  const { num1, num2 } = request.query;
  response.send((Number(num1) + Number(num2)).toString());
});

module.exports = app;
