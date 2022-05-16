require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const auth = require("./middlewares/auth");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/robots", auth);
module.exports = app;
