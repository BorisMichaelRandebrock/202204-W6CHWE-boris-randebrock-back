const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
  },
  speed: {
    type: Number,
  },
  resistance: {
    type: Number,
  },
  creationDate: {
    type: Number,
  },
  img: { type: String },
});
const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
