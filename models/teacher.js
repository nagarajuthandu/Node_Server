let mongoose=require("mongoose")
let teacherSchema=new mongoose.Schema(
    {
        username:String,
        password:String,
        mobile:Number
    }
)

let teacher=mongoose.model("teacher",teacherSchema)
module.exports={teacher}