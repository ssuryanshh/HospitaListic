const httpStatus = require("http-status");
const {
  SaveDatainHospitals,
  GetHospitalsByCityService,
  DeleteHospitalByIdService,
  UpdateHospitalByIdService,
} = require("./../services/Hospitals.service");

async function AddNewHospitalController(req, res) {
  try {
    const { cityId, name, image, speciality, rating } = req.body;
    const result = await SaveDatainHospitals(
      cityId,
      name,
      image,
      speciality,
      rating
    );
    if (result.success) {
      res.status(httpStatus.CREATED).json({
        success: true,
        data: result.data,
      });
    } else {
      throw new Error("Error in AddNewHospitalController");
    }
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
    });
  }
}
async function GetHospitalsByCityController(req, res) {
  try {
    const city = req.query.city.toLowerCase();
    const result = await GetHospitalsByCityService(city);
    if (result.success) {
      res.status(httpStatus.OK).json({
        success: true,
        data: result.data,
      });
    } else {
      throw new Error("Error in GetHospitalsByCityController");
    }
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
    });
  }
}
async function DeleteHospitalByIdController(req, res) {
  try {
    const { id } = req.query;
    const result = await DeleteHospitalByIdService(id);
    if (result.success) {
      res.status(httpStatus.OK).json({
        success: true,
        data: result.data,
      });
    } else {
      throw new Error("Error in DeleteHospitalByIdController");
    }
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
    });
  }
}

async function UpdateHospitalByIdController(req, res) {
  try {
    const { id } = req.query;
    const updateData = req.body;
    const result = await UpdateHospitalByIdService(id, updateData);
    res
      .status(result.success ? httpStatus.OK : httpStatus.INTERNAL_SERVER_ERROR)
      .json(result);
  } catch (err) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: err.message });
  }
}

module.exports = {
  AddNewHospitalController,
  GetHospitalsByCityController,
  DeleteHospitalByIdController,
  UpdateHospitalByIdController,
};
