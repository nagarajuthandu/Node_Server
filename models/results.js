let mongoose=require("mongoose")
let resultsSchema=new mongoose.Schema(
    {
        username:String,
        qid:String,
        question:String,
        language:String,
        code:String,
        input:String,
        output:String,
        score:Number
    }
)
let results=mongoose.model("results",resultsSchema)
module.exports={results}