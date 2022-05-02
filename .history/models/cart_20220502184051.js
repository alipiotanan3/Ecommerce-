const mongoose = require('mongoose');
const {Boolean} = require("webidl-conversions");

const CartShema = new mongoose.Schema({
    userId: {type: String, required: true},
    produtos: {type: String, required:true},
    
   
},
    { timeseries:true}
);

nodule.exports = mongoose.model("Cart, userShema")
