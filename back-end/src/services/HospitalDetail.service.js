const HospitalDetail = require("./../models/HospitalDetails.model");

async function SaveNewHospitalDetailService(
  hospitalId,
  description,
  images,
  numberOfDoctors,
  numberOfDepartments
) {
  try {
    const result = await HospitalDetail.create({
      hospitalId,
      description,
      images,
      numberOfDoctors,
      numberOfDepartments,
    });
    if (result) {
      return {
        success: true,
        data: result,
      };
    } else {
      throw new Error("Error in SaveNewHospitalDetailService");
    }
  } catch (err) {
    console.log(error);
    return {
      success: false,
    };
  }
}

async function GetHospitalDetailBYHospitalIdService(hospitalId) {
  try {
    const result = await HospitalDetail.findOne({
      hospitalId: hospitalId,
    }).populate("hospitalId",'cityName name speciality rating');
    if (result) {
      return {
        success: true,
        data: result,
      };
    } else {
      throw new Error("Error in GetHospitalDetailBYHospitalIdService");
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
}
module.exports = {
    SaveNewHospitalDetailService,
    GetHospitalDetailBYHospitalIdService
}
