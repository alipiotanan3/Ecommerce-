const mongoose = require('mongoose');
const {Boolean} = require("webidl-conversions");

const CartShema = new mongoose.Schema({
    userId: {type: String, required: true},
    produtos: [
        
    ]
    
   
},
    { timeseries:true}
);

nodule.exports = mongoose.model("Cart, userShema")
