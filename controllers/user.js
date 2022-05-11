let db=require("../configs/db")
let user=require("../models/user")
let jwt=require("jsonwebtoken")
let mongoose=require("mongoose")
let promise=global.Promise
const tokenscret="mysecrete"
function generatetoken(user){
    return jwt.sign({data:user},tokenscret,{expiresIn:'24h'})

}
let signup=function(req,res){
    const user1=new user({
        username:req.body.username,
        pasword:req.body.password,
        mobile:req.body.mobile
    })
    user1.save().then(user=>res.status(200).json({token:generatetoken(user)}))
    
    
}

let signin=function(req,res){
    user.findOne({name:req.body.username},{password:0}).then(result=>{
        res.status(200).json({token:generatetoken(user)})
    }).catch(error=>console.log(error))
}
let users=function(req,res){
        
        user.find({}).then(result=>{res.json(result)}).catch(error=>{console.log(error)})

}

module.exports={signup,signin,users}