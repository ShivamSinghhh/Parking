const express = require("express");
const router = express.Router();


const Car = require("../models/car.model")
const Parking = require("../models/parkingZone.model");


router.post("/", async (req,res) => {
    try {
        const car = await Car.create(req.body);
        res.status(201).send({car});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})

router.get("/", async (req,res) => {
    try {
        const car = await Car.find().lean().exec();
        res.status(201).send({car});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})




module.exports = router;