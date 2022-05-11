let mongoose=require("mongoose")
let userSchema=new mongoose.Schema(
    {
        username:String,
        pasword:String,
        mobile:Number
    }
)
module.exports=mongoose.model("user",userSchema)