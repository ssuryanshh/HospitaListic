const httpStatus = require("http-status");

const {
  SaveNewHospitalDetailService,
  GetHospitalDetailBYHospitalIdService,
} = require("./../services/HospitalDetail.service");

async function SaveNewHospitalDetail(req, res) {
  try {
    const { id: hospitalId } = req.query;
    const { description, images, numberOfDoctors, numberOfDepartments } =
      req.body;
    const result = await SaveNewHospitalDetailService(
      hospitalId,
      description,
      images,
      numberOfDoctors,
      numberOfDepartments
    );
    if (result.success) {
      res.status(httpStatus.CREATED).json({
        success: true,
        data: result.data,
      });
    } else {
      throw new Error("Error in SaveNewHospitalDetailController");
    }
  } catch (err) {
    console.log(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
}
async function GetHospitalDetailBYHospitalId(req, res) {
  try {
    const { id: hospitalId } = req.query;
    const result = await GetHospitalDetailBYHospitalIdService(hospitalId);
    if (result.success) {
      const {
        hospitalId: { name, cityName, speciality, rating },
        description,
        images,
        numberOfDepartments,
        numberOfDoctors,
      } = result.data;
      const DATA = {
        id: hospitalId,
        name,
        cityName,
        speciality,
        rating,
        description,
        images,
        numberOfDepartments,
        numberOfDoctors,
      };
      res.status(httpStatus.OK).json({
        success: true,
        data: DATA,
      });
    } else {
      throw new Error("Error in GetHospitalDetailBYHospitalIdController");
    }
  } catch (err) {
    console.log(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
}

module.exports = {
    SaveNewHospitalDetail,
    GetHospitalDetailBYHospitalId
}
