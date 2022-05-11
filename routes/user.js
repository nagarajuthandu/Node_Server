const express = require("express");
let token=require("../middleware/tokenverify")
let user=require("../controllers/user")
let router = express.Router()
router.post("/register",user.signup)
router.post("/login",user.signin)
router.get("/users",user.users)

router.get("/jwt",token.verify,(req,res)=>{
    res.status(200).json(req.user)
})


module.exports=router