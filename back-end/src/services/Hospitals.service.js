const Hospitals = require("./../models/Hospitals.model");
const Cities = require("./../models/City.model");

async function SaveDatainHospitals(cityId, name, image, speciality, rating) {
  try {
    const city = await Cities.findById(cityId);
    if (!city) {
      return { status: 404, message: "City not found" };
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
    const {
      description,
      images,
      numberOfDoctors,
      numberOfDepartments,
      ...hospitalData
    } = updateData;

    // Update basic hospital information
    const hospitalResult = await Hospital.findByIdAndUpdate(id, hospitalData, {
      new: true,
    });

    // Update hospital detailed information if provided
    let hospitalDetailResult;
    if (description || images || numberOfDoctors || numberOfDepartments) {
      hospitalDetailResult = await HospitalDetail.findOneAndUpdate(
        { hospitalId: id },
        { description, images, numberOfDoctors, numberOfDepartments },
        { new: true, upsert: true } // upsert: true creates a new document if none exists
      );
    }

    return {
      success: true,
      data: {
        hospital: hospitalResult,
        details: hospitalDetailResult,
      },
    };
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
  UpdateHospitalByIdService,
};
