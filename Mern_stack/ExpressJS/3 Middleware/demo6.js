// Program showing the concept of Router level middleware

var express = require("express");
var adminRouter = require("./adminRoute");
var userRouter = require("./userRoute");
var path = require("path");

var app = express();
app.use((request,response,next)=>{
    console.log("Request Received");
    next();    
});

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/index.html");
});
app.use("/admin",adminRouter);
app.use("/user",userRouter);

app.listen("3000",()=>{
    console.log('Server connection successfull');
});