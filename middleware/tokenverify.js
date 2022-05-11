let jwt=require("jsonwebtoken")
let secrete="mysecrete"
exports.verify=(req,res,next)=>
{
    const token=req.header.authorization
    if(!token)
    {
        res.status(403).json({error:"please provide token"})
    }
    else{
    jwt.verify(token.split("")[1],myscrete,(err,value)=>{if(err){
        res.status(200).json({error:"failed to authenticate"})
        req.user=value.data
        next()
    
    }
    })
}
}
