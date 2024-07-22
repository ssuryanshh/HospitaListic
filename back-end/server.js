const express = require("express")
require("dotenv").config()
require("./src/db/connect")
const cors = require('cors')

const CitiesRouter = require("./src/routes/Cities.Route");
const HospitalRouter = require("./src/routes/Hospitals.Route")
const HospitalDetailRouter = require("./src/routes/HospitalDetails.Route")
const AuthRouter = require("./src/routes/Auth.Route")
const PORT = process.env.PORT

const server = express()

server.use(cors())
server.use(express.json())
server.use("/api/v1/cities", CitiesRouter);
server.use("/api/v1/hospitals", HospitalRouter);
server.use("/api/v1/hospital-details", HospitalDetailRouter);
server.use("/api/v1/auth", AuthRouter);

server.listen(PORT, ()=>{
    console.log("Server is started on Port : ",PORT)
})