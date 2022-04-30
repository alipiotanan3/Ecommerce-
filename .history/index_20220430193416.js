const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user:1234@cluster0.wtgqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>console.log("BAn"))

app.listen(5000, ()=>{
    console.log("servidor rodando")
})