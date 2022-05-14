require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const debug = require("debug")("robots:root");
const chalk = require("chalk");
// const initializeServer = require("./server/initializeServer");

const robots = [
  {
    id: 1,
  },
];

const app = express();
app.use(morgan("dev"));
app.use(express.json());

// initializeServer(process.env.SERVER_PORT || 5000);
// app.use(morgan("dev"));
// app.use(express.json());
// app.get("/robots", (req, res) => {
//   res.status(200).json(robots);
// });

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

initializeServer(4000);

app.get("/robots", (req, res) => res.status(200).json(robots));
