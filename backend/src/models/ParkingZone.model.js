const mongoose = require("mongoose");



const parkingZoneSchema = new mongoose.Schema(   {
    zone : {type:"String",required : true},
    bikeMax : {type:"number", required : true},
    carMax : {type:"number",required : true},
    truckMax : {type:"number",required : true},     
    
},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("parkingZone",parkingZoneSchema);