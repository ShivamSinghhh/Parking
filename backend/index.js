
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const ParkingController = require("./src/controllers/ParkingZone.controller");
const VehicleController = require("./src/controllers/Vehicle.controller");
const bikeController = require("./src/controllers/bike.controller");
const carController = require("./src/controllers/car.controller");
const truckController = require("./src/controllers/truck.controller");

app.use("/parking",ParkingController);
app.use("/vehicle",VehicleController);
app.use("/bike",bikeController);
app.use("/car",carController);
app.use("/truck",truckController);


module.exports = app;

