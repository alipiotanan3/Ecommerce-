const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require("e")

mongoose.connect("mongodb+srv://user:1234@cluster0.wtgqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>console.log("Banco connectado com sucesso")).catch((err)=>{console.log(err)})

app.listen(5000, ()=>{
    console.log("servidor rodando")
})