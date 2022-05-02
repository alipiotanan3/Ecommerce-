const mongoose = require('mongoose');
const {Boolean} = require("webidl-conversions");

const userShema = new mongoose.Schema({
    title: {type: String, required: true, unique:true},
    desc: {type: String, required:true},
    img:{type:String, required:true},
    categoria:{type:String, required:true},
    tamanho:{type:String, required:true},
    cor:{type:String, required:true},
    preco:{type:String, required:true},
   
},
    { timeseries:true}
);

nodule.exports = mongoose.model("Produtos, userShema")
