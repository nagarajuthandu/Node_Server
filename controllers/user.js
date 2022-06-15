let db=require("../configs/db")
let {user}=require("../models/user")
let {questions}=require("../models/question")
let {results}=require("../models/results")
let jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt");
let mongoose=require("mongoose")
var axios = require('axios');
let promise=global.Promise
const tokenscret="mysecrete"
function generatetoken(user){
    return jwt.sign({data:user},tokenscret,{expiresIn:'24h'})

}
let signup=function(req,res){
    var salt=bcrypt.genSaltSync(10);
    var password=bcrypt.hashSync(req.body.password,salt);
    console.log(password)
    const user1=new user({
        username:req.body.username,
        password:password,
        mobile:req.body.mobile
    })
    user1.save().then(user=>res.status(200).json({token:generatetoken(user)}))
    
    
}

let signin=function(req,res){
    user.findOne({username:req.body.username},{}).then(result=>{
            bcrypt.compare(req.body.password,result.password,function(err,data){
            if(err)
            {
                console.log(err)
            }
            if(data)
            {
                
                res.status(200).json({token:generatetoken(user),username:result.username})
            
            }
            else
            {
                res.send("invalid password")
            }
        })
                   
        
            
    }).catch(error=>console.log(error))
}
let users=function(req,res){
        
        user.find({}).then(result=>{res.json(result)}).catch(error=>{console.log(error)})
        
}
let getqn = function(req,res){
    questions.find({}).then(result=>{res.json(result)}).catch(error=>{console.log(error)})
}

let run=function(req,res)
{
    var result;
    var testcase;
       
    var data = JSON.stringify({
               "code":req.body.code,
               "language":req.body.language,
               "input":req.body.userip
               });
      
    var config = {
      method: 'post',
      url: 'https://compilersapi.herokuapp.com/',
    //   url: 'http://localhost:8080',

      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
    result=response.data.output
    if(result) {result=result.trim()}
    
       
    if(result==req.body.expop)
    {
        testcase="PASS"
    }
    else
    {
        testcase="FAIL"
    }
    res.status(200).json({result:result,testcase:testcase})
  
    })
    .catch(function (error) {
      console.log(error);
    }); 

    
         
}

let save=function(req,res){
   
    console.log(req.body)
    let { username,qid,question,language,code,input,score,output}=req.body
    const results1=new results()
    results1.username=username;
    results1.qid=qid;
    results1.question=question
    results1.language=language;
    results1.code=code;
    results1.input=input;
    results1.score=score;
    results1.output=output;
    results1.save().then(results=>res.status(200))
    
    
}


module.exports={signup,signin,users,run,getqn,save}