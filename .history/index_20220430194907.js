const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require("dotenv");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("Banco connectado com sucesso"))
    .catch((err)=>{console.log(err)})

    app.get("/api/tests", ()=>)

app.listen(process.env.PORT || 5000, ()=>{
    console.log("servidor rodando")
})