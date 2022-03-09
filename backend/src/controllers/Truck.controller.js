const express = require("express");
const router = express.Router();


const Truck = require("../models/truck.model")
const Parking = require("../models/parkingZone.model");


router.post("/", async (req,res) => {
    try {
        const truck = await Truck.create(req.body);
        res.status(201).send({truck});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})

router.get("/", async (req,res) => {
    try {
        const truck = await Truck.find().lean().exec();
        res.status(201).send({truck});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})





module.exports = router;