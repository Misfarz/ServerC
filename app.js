
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "CI/CD demo API is running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

app.get("/api/greet/:name", (req, res) => {
  res.json({
    message: `Hello, ${req.params.name}!`,
  });
});

module.exports = app;
