const express = require("express");
const {
  SaveNewHospitalDetail,
  GetHospitalDetailBYHospitalId,
} = require("./../controllers/HospitalDetail.controller");
const {Authorization} = require("./../middlewares/authorization.middleware")
const HospitalDetailRouter = express.Router();

HospitalDetailRouter.post("/add",Authorization(['admin']), SaveNewHospitalDetail);
HospitalDetailRouter.get("/", GetHospitalDetailBYHospitalId);
module.exports = HospitalDetailRouter;
