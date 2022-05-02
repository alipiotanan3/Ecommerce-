const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    username: type: String, required: true, unique:true},
    email: {type: String, required:true, unique:true},
    password:{type:String, required:true},
    isAdmin: {
        type: Boolean,
        dafault: false,
    },
}

)