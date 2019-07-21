const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./services/passport");

const authRouter = require("./routers/authRouter");

const server = express();

server.use(helmet());
server.use(bodyParser.json());
server.use(cors());

server.use(authRouter);

module.exports = server;
