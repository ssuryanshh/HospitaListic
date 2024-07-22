const express = require("express");

const {
  AddNewHospitalController,
  GetHospitalsByCityController,
  DeleteHospitalByIdController,
  UpdateHospitalByIdController,
} = require("./../controllers/Hospitals.controller");
const {Authorization} = require("./../middlewares/authorization.middleware")

const HospitalRouter = express.Router();
HospitalRouter.post("/add",Authorization(['admin']), AddNewHospitalController);
HospitalRouter.get("/", GetHospitalsByCityController);
HospitalRouter.delete("/delete",Authorization(['admin']), DeleteHospitalByIdController);
HospitalRouter.put("/update",Authorization(['admin']), UpdateHospitalByIdController);
module.exports = HospitalRouter;
