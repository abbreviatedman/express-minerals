const express = require("express");
const app = express();
const rock = require("./models/rock");

// Routes
// the / route
app.get("/", (request, response) => {
  console.log("GET request received to route: /");
  response.send("Welcome to Express Minerals App. You rock.");
});

app.get("/rocks", (request, response) => {
  console.log("GET request received to route: /rocks");
  response.send(rock);
});

module.exports = app;
