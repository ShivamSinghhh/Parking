const express = require("express");
const router = express.Router();



const Parking = require("../models/parkingZone.model")
const Car = require("../models/car.model")
const Bike = require("../models/bike.model")
const Truck = require("../models/truck.model")


router.post("/", async (req, res) => {
    try {

        const parking = await Parking.create(req.body);
        res.status(201).send({ parking });

    } catch (e) {
        res.status(500).json({ status: "Failed", message: e.message });
    }
})

router.get("/", async (req, res) => {
    try {

        const parking = await Parking.find().lean().exec();
        res.status(201).send({ parking });

    } catch (e) {
        res.status(500).json({ status: "Failed", message: e.message });
    }
})

router.get("/check", async (req, res) => {
    try {
        let data = req.body.type;
        let zoneType = req.body.zone;
        const parking = await Parking.find({ zone: { $eq: zoneType } }).lean().exec();

       console.log(parking[0]._id.toString())

        let item = {
            userName: req.body.userName,
            vehicleNum: req.body.vehicleNum ,         
           parkingZone_id : parking[0]._id.toString()

        }        

        if (data == "bike") {
            const num = await Bike.find({}).countDocuments();

            if (+parking[0].bikeMax > +num) 
            {              

                const bike = await Bike.create(item);
                console.log(bike)
                return res.status(201).send({"status":"Bike-Parked"});


            }else{
                res.status(201).send({"status":"No Availability"});
            }
        }

       else if (data == "car") {
            const num = await Car.find({}).countDocuments();

            if (+parking[0].carMax > +num) 
            {              

                const car = await Car.create(item);
                console.log(car)
               return res.status(201).send({"status":"Car-Parked"});


            }else{
               return res.status(201).send({"status":"No Availability"});
            }
        }

        else if (data == "truck") {
            const num = await Truck.find({}).countDocuments();

            if (+parking[0].truckMax > +num) 
            {            

                const truck = await Truck.create(item);
                console.log(truck)
                return res.status(201).send({"status":"Truck-Parked"});
            }else{
               return res.status(201).send({"status":"No Availability"});
            }
        }        

     

    }
     catch (e) {
      return  res.status(500).json({ status: "Failed", message: e.message });
    }
})


module.exports = router;