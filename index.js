require("dotenv").config();
const debug = require("debug")("robots:root");
const initializeServer = require("./server/initializeServer");

const connectDb = require("./db/index");

const port = process.env.SERVER_PORT || 5000;

(async () => {
  try {
    await connectDb(process.env.MONGO_PORT);
    await initializeServer(port);
  } catch {
    debug("error");
  }
})();
