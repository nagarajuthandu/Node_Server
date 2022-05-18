let express=require("express")
let db=require("./configs/db")
let user=require("./routes/user.js")
let teacher =require("./routes/teacher.js")
let cors = require('cors');
let app=express()
let PORT=process.env.PORT || 80
app.listen(PORT,()=>{console.log("server is listening on %s",PORT)})
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
app.use("/user",user)
app.use("/teacher",teacher);
// app.use("/admin",admin)