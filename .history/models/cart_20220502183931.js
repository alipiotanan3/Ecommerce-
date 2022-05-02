const mongoose = require('mongoose');
const {Boolean} = require("webidl-conversions");

const Shema = new mongoose.Schema({
    title: {type: String, required: true, unique:true},
    desc: {type: String, required:true,},
    img:{type:String, required:true},
    categoria:{type:String,type: Array},
    tamanho:{type:String },
    cor:{type:String },
    preco:{type:Number, required:true},
   
},
    { timeseries:true}
);

nodule.exports = mongoose.model("Produtos, userShema")
