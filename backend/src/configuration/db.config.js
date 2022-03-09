
const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://shivamsingh:qwertpoiuy@cluster0.sbgjo.mongodb.net/parking");
}
