const { userInfo } = require('os');

const router = require('express').Router();

router.get("/usertest",(req, res)=>{
    res.send("user test")
});

router.post("/userposttest", (req, res)=>{
    const username = req.body.username
    res.send("seu nome é")
})


module.exports = router