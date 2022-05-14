require("dotenv").config();
const debug = require("debug")("robots:root");
const chalk = require("chalk");
const app = require("..");

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

module.exports = initializeServer;
