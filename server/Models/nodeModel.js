const mongoose = require("mongoose")

const notesSchema = mongoose.Schema({
    foodName: String,
    image: String,
    desc: String,
    price: String
});


module.exports = ImageModel = mongoose.model("Image", notesSchema)