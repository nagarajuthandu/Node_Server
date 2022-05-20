let mongoose=require("mongoose")
let questionSchema=new mongoose.Schema(
    {
    qid : String,
	question : String,
	desc : String,
	userip : String,
	expop : String,
	hdip : String,
	hdop : String
    }
)

let questions = module.exports=mongoose.model("questions",questionSchema)
module.exports={questions}