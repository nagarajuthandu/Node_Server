let mongoose=require("mongoose")
const url = process.env.MONGO_URI;
mongoose.connect(url)
let db=mongoose.connection
db.on("error",()=>{console.log("error in establishing connection")})
db.once("open",()=>{console.log("connection established to database")})
