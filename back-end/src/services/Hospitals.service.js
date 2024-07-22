const Hospitals = require("./../models/Hospitals.model");
const Cities = require("./../models/City.model");

async function SaveDatainHospitals(cityId, name, image, speciality, rating) {
  try {
    const city = await Cities.findById(cityId);
    if(!city){
        return {status: 404, message: "City not found"}
    }

    const result = await Hospitals.create({
      cityId,
      name,
      cityName: city.city,
      image,
      speciality,
      rating,
    });

    if (result) {
      return {
        success: true,
        data: result,
      };
    } else {
      throw new Error("Error in SaveDatainHospitals");
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
}

async function GetHospitalsByCityService(cityName) {
  try {
    const cityResult = await Cities.findOne({
      id: cityName,
    });
    if (!cityResult) {
      throw new Error(`${cityName} is not available in the cities`);
    }
    const { _id: cityId } = cityResult;

    const HospitalResult = await Hospitals.find({
      cityId: cityId,
    });
    if (HospitalResult) {
      return {
        success: true,
        data: HospitalResult,
      };
    } else {
      throw new Error("Unable to fetch the adventure using cityId: " + cityId);
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
}

async function DeleteHospitalByIdService(id) {
  try {
    const result = await Hospitals.findByIdAndDelete(id);
    if (result) {
      return {
        success: true,
      };
    } else {
      throw new Error("Error in DeleteHospitalByIdService");
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
}

async function UpdateHospitalByIdService(id, updateData) {
    try {
      const result = await Hospitals.findByIdAndUpdate(id, updateData, { new: true });
      if (result) {
        return {
          success: true,
          data: result,
        };
      } else {
        throw new Error("Error in UpdateHospitalByIdService");
      }
    } catch (err) {
      console.log(err);
      return {
        success: false,
        message: err.message,
      };
    }
  }

module.exports = {
  SaveDatainHospitals,
  GetHospitalsByCityService,
  DeleteHospitalByIdService,
  UpdateHospitalByIdService
};
