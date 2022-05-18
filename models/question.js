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

let question = module.exports=mongoose.model("question",questionSchema)
module.exports={question}