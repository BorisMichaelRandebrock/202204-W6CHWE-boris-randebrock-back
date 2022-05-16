const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  userNname: { type: String, required: true, unique: true },
  passWord: {
    type: String,
    required: true,
    minlength: 5,
    validate: () => {},
  },
});

const User = model("User", UserSchema, "users");

module.exports = User;
