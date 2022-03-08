const mongoose = require("mongoose");


// let parkingSchema = {
//     "bike": {
//         "max" : 10,
//         "avail" : 10,
        
//     },
//     "car": {
//         "max" : 5,
//         "avail" : 5
//     },
//     "tempo": { "max" : 4,
//         "avail" : 4

//     }
// }


const parkingSchema = new mongoose.Schema(
    {
            max : 10,
            avail : 10, 
         
       
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("parkingSlot",parkingSchema);