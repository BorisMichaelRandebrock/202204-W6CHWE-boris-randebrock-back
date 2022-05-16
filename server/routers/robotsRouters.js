const express = require("express");
const { getRobots } = require("../controllers/robotControllers");

const router = express.Router();

router.get("/", getRobots);

module.exports = router;
