const { userInfo } = require('os');

const router = require('express').Router();

router.get("/usertests",(req, res)=>{
    res.send("user test")
});




module.exports = router