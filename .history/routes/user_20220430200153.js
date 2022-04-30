const { userInfo } = require('os');

const router = require('express').Router();

router.get("/usertest",(req, res)=>{
    res.send("user test")
});

router.post("userposttest", (req, res)=>{
    const username = req.body.username
    
})


module.exports = router