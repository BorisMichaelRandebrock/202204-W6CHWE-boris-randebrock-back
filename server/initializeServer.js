require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const debug = require("debug")("robots:root");
const chalk = require("chalk");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

const robots = [
  {
    id: 1,
  },
];

const port = process.env.SERVER_PORT || 5000;

const initializeServer = () => {
  const server = app.listen(port, () => {
    debug(chalk.greenBright(`Server listening on ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.redBright("all wrong"));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red("port in use"));
    }
  });
};

app.get("/robots", (req, res) => res.status(200).json(robots));

module.exports = initializeServer;
