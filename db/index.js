require("dotenv").config();
const debug = require("debug")("robots-api:db");
const chalk = require("chalk");
const mongoose = require("mongoose");

const connectDb = async (connectionString) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionString, (error) => {
      if (error) {
        debug(chalk.red("Error in DB ->", error.message));
        reject();
        return;
      }
      debug(chalk.green("Connected to DB!"));
      resolve();
    });
  });

module.exports = connectDb;
