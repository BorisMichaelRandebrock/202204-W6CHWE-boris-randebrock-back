const debug = require("debug")("robots:initialize server");
const chalk = require("chalk");
const app = require(".");
const Robot = require("../db/models/Robot");

const initializeServer = (port) => {
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

// app.get("/Robot", (req, res) => res.status(200).json(robots));

module.exports = initializeServer;
