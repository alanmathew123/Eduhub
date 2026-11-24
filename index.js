require("dotenv").config();
const mongoose = require("mongoose");
const express=require('express')
const app=express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const port=3000

//routes

var userRoutes=require("./routes/user-routes")
var studentsRoute=require("./routes/student-routes")
var adminRoute=require("./routes/admin-routes")
var mcqRoute=require("./routes/mcq-routes")
var resultRoute=require("./routes/result-routes")
var complaintRoutes=require("./routes/complaint-routes")



//DB Connection
mongoose
 .connect(process.env.DATABASE, {
 useNewUrlParser: true, 
 useUnifiedTopology: true 
 })
 .then(() => {
 console.log("DB CONNECTED");
 });

 //Middleware
app.use(bodyParser.json({limit:'10mb'}))
app.use(cookieParser());
app.use(cors());

//use routes
app.use('/api',userRoutes)
app.use('/api',studentsRoute)
app.use('/api',adminRoute)
app.use('/api',mcqRoute)
app.use('/api',resultRoute)
app.use('/api',complaintRoutes)



//start
app.listen(port,()=>{
    console.log("App listening on port "+port)
})