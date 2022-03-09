const mongoose = require("mongoose");



const vehicleSchema = new mongoose.Schema(   {
    name : {type:"String",required : true},
    type : {type:"String",required : true},
   
    rate : {type:"Number",required : true},
   
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

module.exports = mongoose.model("vehicle",vehicleSchema);