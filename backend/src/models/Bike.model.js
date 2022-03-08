const mongoose = require("mongoose");



const bikeSchema = new mongoose.Schema();

module.exports = mongoose.model("bikeSlot",bikeSchema);