const httpStatus = require("http-status");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const {
  RegisterUserService,
  GetUserByEmailId,
} = require("./../services/User.service");

async function RegisterUserController(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      throw new Error("Name is required");
    }
    if (!email) {
      throw new Error("Email is required");
    }
    if (!password) {
      throw new Error("Password is required");
    }
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    const user = await RegisterUserService(name, email, encryptedPassword);
    if (user.success) {
      res.status(httpStatus.CREATED).json({
        success: true,
      });
    } else {
      throw new Error("Failed to register user");
    }
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
}

async function LoginUserController(req, res) {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("Email is required");
    }
    if (!password) {
      throw new Error("Password is required");
    }
    const user = await GetUserByEmailId(email);
    if (!user.success) {
      res.status(httpStatus.BAD_REQUEST).json({
        success: false,
      });
    }
    const { password: encryptedPassword, _id: id } = user.data;
    const compareResult = await bcrypt.compare(password, encryptedPassword);
    if (!compareResult) {
      throw new Error("Invalid credentials");
    }
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

    const PAYLOAD = {
      id,
      email,
    };
    const JWT_TOKEN = await jwt.sign(PAYLOAD, JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(httpStatus.OK).json({
      success: true,
      token: JWT_TOKEN,
    });
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
    RegisterUserController,
    LoginUserController
}
