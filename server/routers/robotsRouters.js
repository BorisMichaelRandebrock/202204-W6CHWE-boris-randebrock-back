const express = require("express");
const { getRobots } = require("../controlers/robotControlers");

const router = express.Router();

router.get("/", getRobots);

module.exports = router;
