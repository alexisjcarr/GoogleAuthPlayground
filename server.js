const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();

server.use(helmet());
server.use(bodyParser.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("<h1>The Playground Is Open</h1>");
});

module.exports = server;
