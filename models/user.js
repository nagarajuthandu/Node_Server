let mongoose=require("mongoose")
let userSchema=new mongoose.Schema(
    {
        username:String,
        password:String,
        mobile:Number
    }
)
let user=mongoose.model("user",userSchema)
module.exports={user}