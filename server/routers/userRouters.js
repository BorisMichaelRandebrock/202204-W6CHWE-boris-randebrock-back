const express = require("express");
const loginUser = require("../controllers/userControllers");

const userRouter = express.Router();
userRouter.post("/users/login", loginUser);

module.exports = userRouter;
