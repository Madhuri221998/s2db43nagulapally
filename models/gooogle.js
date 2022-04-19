const mongoose = require("mongoose") 
const gooogleSchema = mongoose.Schema({ 
 gooogle_itemname: String, 
 gooogle_quanitiy: Number, 
 gooogle_price: Number 
}) 
 
module.exports = mongoose.model("gooogle", gooogleSchema) 