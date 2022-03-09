const express = require("express");
const router = express.Router();


const Bike = require("../models/bike.model")
const Parking = require("../models/parkingZone.model");


router.post("/", async (req,res) => {
    try {
        const bike = await Bike.create(req.body);
        res.status(201).send({bike});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})

router.get("/", async (req,res) => {
    try {
        const bike = await Bike.find().lean().exec();
        res.status(201).send({bike});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})



module.exports = router;