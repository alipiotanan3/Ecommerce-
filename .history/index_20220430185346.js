const express = require ('express');
const app = express();
const mongoose = require("mongii")

app.listen(5000, ()=>{
    console.log("servidor rodando")
})