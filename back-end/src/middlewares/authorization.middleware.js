const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const { GetUserByEmailId } = require("./../services/User.service");

require("dotenv").config();

function Authorization(ALLOWED_ROLES) {
  return async function (req, res, next) {
    try {
      const TOKEN = req.headers.authorization.split(" ")[1];
      const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
      const result = await jwt.verify(TOKEN, JWT_SECRET_KEY);

      const { id, email } = result;

      const user = await GetUserByEmailId(email);

      if (!user.success) {
        throw new Error("User is not present");
      }
      const { role } = user.data;

      const roleCheckResult = ALLOWED_ROLES.map((role) =>
        role.toLowerCase()
      ).includes(role.toLowerCase());
      if (!roleCheckResult) {
        throw new Error("User is not authorized");
      }
      req.id = id;
      req.email = email;
      next();
    } catch (error) {
      res.status(httpStatus.UNAUTHORIZED).send({ message: error.message });
    }
  };
}
module.exports = {Authorization}
