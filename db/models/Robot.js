const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  speed: {
    type: Number,
  },
  name: {
    type: String,
  },
  creationDate: {
    type: Number,
  },
  age: {
    type: Number,
  },
});
const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
