const mongoose = require('mongoose');
const {Boolean} = require("web")

const userShema = new mongoose.Schema({
    username: {type: String, required: true, unique:true},
    email: {type: String, required:true, unique:true},
    password:{type:String, required:true},
    isAdmin: {
        type: Boolean,
        dafault: false,
    },
    { timeseries:true}
);

nodule.exports = mongoose.model("User, userShema")