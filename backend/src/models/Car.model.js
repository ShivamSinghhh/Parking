const mongoose = require("mongoose");



const carSchema = new mongoose.Schema();

module.exports = mongoose.model("carSlot",carSchema);