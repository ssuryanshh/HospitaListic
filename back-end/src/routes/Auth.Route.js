const express = require("express")

const {RegisterUserController,LoginUserController} = require("./../controllers/Auth.controller")

const AuthRouter = express.Router()
AuthRouter.post("/register",RegisterUserController)
AuthRouter.post("/login",LoginUserController)
module.exports = AuthRouter
