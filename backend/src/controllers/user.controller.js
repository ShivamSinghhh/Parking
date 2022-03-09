const express = require("express");
const router = express.Router();



const User = require("../models/user.model")

router.post("/", async (req,res) => {
    try {

        const user = await User.create(req.body);
        res.status(201).send({user});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})

router.get("/", async (req,res) => {
    try {

        const user = await User.find().lean().exec();
        res.status(201).send({user});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})

module.exports = router;