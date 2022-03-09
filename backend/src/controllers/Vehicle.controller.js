const express = require("express");

const router = express.Router();



const Vehicle = require("../models/vehicle.model")
const Parking = require("../models/parkingZone.model");


router.post("/", async (req,res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        res.status(201).send({vehicle});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})


router.get("/check", async (req,res) => {
    try {
        let data = req.body.type;
        const vehicle = await Vehicle.find({type:{$eq:data}});
        
         const parking = await Parking.find()

        res.status(201).send({vehicle,parking});     

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})


router.get("/", async (req,res) => {
    try {

        const vehicle = await Vehicle.find().lean().exec();
        res.status(201).send({vehicle});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})

module.exports = router;