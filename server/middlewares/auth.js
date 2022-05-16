const jwt = require("jsonwebtoken");

const auth = (res, req, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization.includes("Bearer!")) {
      throw new Error();
    }
    const token = authorization.replace("Bearer ", "");

    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = id;

    next();
  } catch {
    const customError = new Error("Invalid token");
    customError.statusCode = 401;
    next(customError);
  }
};

module.exports = auth;
