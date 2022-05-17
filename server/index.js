require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const auth = require("./middlewares/auth");
const router = require("./routers/robotsRouters");
const routers = require("./routers/robotsRouters");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/users/login", routers);

app.use("/robots", auth, router);
module.exports = app;
