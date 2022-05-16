const jwt = require("jsonwebtoken");

const User = require("../../db/models/users");

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (!user) {
    res.status(404).json({ msg: "user not found" });
    return;
  }

  res.status(200).json();

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });

  res.json({ token });
};

module.exports = loginUser;
