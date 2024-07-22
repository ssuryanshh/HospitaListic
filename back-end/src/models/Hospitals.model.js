const mongoose = require("mongoose");
const HospitalSchema = new mongoose.Schema({
    cityId : {type: mongoose.Schema.Types.ObjectId,rel:"cities",required:true},
    name : {type:String,required:true},
    cityName:{type:String,required:true},
    image: {type:String,required:true},
    speciality : {type:[String], required: true},
    rating: { type: Number, required: true, min: 0, max: 5 }
})

const Hospitals = mongoose.model("hospitals",HospitalSchema)

module.exports = Hospitals;