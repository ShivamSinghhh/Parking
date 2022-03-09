const mongoose = require("mongoose");




const userSchema = new mongoose.Schema(
    {
        name : {type:"String",required : true},
        vehicleNum : {type:"String",required : true},
        vehicleType : {type:"String",required : true},
        
      
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("user",userSchema);