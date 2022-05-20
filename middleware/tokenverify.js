let jwt=require("jsonwebtoken")
let secrete="mysecrete"
exports.verify=(req,res,next)=>
{
    // console.log(req.headers.authorization)
    let token=JSON.parse(req.headers.authorization)
  
      
    if(!token)
    {
        res.status(403).json({error:"please provide token"})
    }
    else{
        token=token.split(" ")[0]      
        jwt.verify(token,secrete,(err,value)=>{
            if(err){
                console.log(err)
            }
            if(value)
            {
            next()
            }
    })
    
}
}
