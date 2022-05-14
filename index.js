require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("robots:root");
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.SERVER_PORT || 5000;

const server = app.listen(port, () => {
  debug(chalk.greenBright(`Server listening on ${port}`));

  server.on("error", (error) => {
    debug(chalk.redBright("all wrong"));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red("port in use"));
    }
  });
});

app.use(morgan("dev"));
app.use(express.json());
