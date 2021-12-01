const mongoose = require("mongoose")
const tigerSchema = mongoose.Schema({
    color: String,
    place: String,
    weight: {type:Number,min:20,max:200}
})
module.exports = mongoose.model("tiger",
    tigerSchema)