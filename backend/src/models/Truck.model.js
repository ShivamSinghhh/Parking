const mongoose = require("mongoose");



const truckSchema = new mongoose.Schema(   {
    userName : {type:"String",required : true},
    vehicleNum : {type:"String",required : true},   
    rate : {type:"String",default:50},  
    parkingZone_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "parkingZone",
        required: true
    }
},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("truckSlot",truckSchema);