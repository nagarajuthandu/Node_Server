const express = require("express");
let token=require("../middleware/tokenverify")
let teacher=require("../controllers/teacher")
let router = express.Router()

router.post("/register",teacher.signup)
router.post("/login",teacher.signin)
// router.post("/addqns",token.verify,teacher.addqns)
router.post("/addqn",token.verify,teacher.addqn)
router.put("/updateqn/:_id",teacher.updateqn)
router.delete("/deleteqn/:_id",token.verify,teacher.deleteqn)
router.get("/getqn/:id",token.verify,teacher.getqn)
router.get("/getqns",token.verify,teacher.getqns)
router.get("/getresults",token.verify,teacher.getresults)

router.get("/jwt",token.verify,(req,res)=>{
    res.status(200).json(req.user)
})

module.exports=router