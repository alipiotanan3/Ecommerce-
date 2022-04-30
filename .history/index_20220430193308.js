const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user:user@cluster0.wtgqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.listen(5000, ()=>{
    console.log("servidor rodando")
})