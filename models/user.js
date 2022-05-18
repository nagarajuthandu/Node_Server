let mongoose=require("mongoose")
let userSchema=new mongoose.Schema(
    {
        username:String,
        password:String,
        mobile:Number
    }
)
let qnSchema=new mongoose.Schema(
    {
        qnNo:Number,
        qn:String,
        description:String,
        expectedoutput1:String,
        expectedoutput2:String
    }
)
let user=mongoose.model("user",userSchema)
module.exports={user}