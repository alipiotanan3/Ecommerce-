const mongoose = require('mongoose');
const {Boolean} = require("webidl-conversions");

const userShema = new mongoose.Schema({
    title: {type: String, required: true, unique:true},
    desc: {type: String, required:true, unique:true},
    img:{type:String, required:true},
    :{type:String, required:true},
    img:{type:String, required:true},
    img:{type:String, required:true},
    img:{type:String, required:true},
   
},
    { timeseries:true}
);

nodule.exports = mongoose.model("Produtos, userShema")
