const mongoose = require("mongoose");



const carSchema = new mongoose.Schema(   {
    userName : {type:"String",required : true},
    vehicleNum : {type:"String",required : true},   
    rate : {type:"String",default:40},   
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

module.exports = mongoose.model("carSlot",carSchema);