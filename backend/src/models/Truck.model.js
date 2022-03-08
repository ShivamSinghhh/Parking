const mongoose = require("mongoose");



const truckSchema = new mongoose.Schema();

module.exports = mongoose.model("truckSlot",truckSchema);