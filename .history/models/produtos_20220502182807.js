const mongoose = require('mongoose');
const {Boolean} = require("webidl-conversions");

const userShema = new mongoose.Schema({
    title: {type: String, required: true, unique:true},
    desc: {type: String, required:true, unique:true},
    ima:{type:String, required:true},
    isAdmin: {
        type: Boolean,
        dafault: false,
    },
},
    { timeseries:true}
);

nodule.exports = mongoose.model("Produtos, userShema")