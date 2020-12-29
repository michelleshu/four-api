const bodyParser = require("body-parser");
const express = require("express");
const logger = require("morgan");

const app = express();

// Log requests to the console
app.use(logger("dev"));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up a default catch-all route that sends a welcome message in JSON
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of nothingness.",
  })
);

module.exports = app;
