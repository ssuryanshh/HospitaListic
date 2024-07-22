const mongoose = require("mongoose")

const HospitalDetailSchema = new mongoose.Schema({
    hospitalId: {type:mongoose.Schema.Types.ObjectId , ref:"hospitals",required:true},
    images:{type:[String],required:true},
    description:{type:String, required:true},
    numberOfDoctors:{type:Number,required:true},
    numberOfDepartments:{type:Number,required:true},
})

const HospitalDetail = mongoose.model("hospital-details",HospitalDetailSchema)

module.exports = HospitalDetail