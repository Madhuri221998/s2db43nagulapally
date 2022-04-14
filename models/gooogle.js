const mongoose = require("mongoose") 
const gooogleSchema = mongoose.Schema({ 
 Itemname: String, 
 Quantity: Number, 
 price: Number 
}) 
 
module.exports = mongoose.model("gooogle", gooogleSchema)