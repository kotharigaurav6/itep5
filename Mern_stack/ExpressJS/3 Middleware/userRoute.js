// userRoute

var express = require("express");
var userRouter = express.Router();
var path = require("path");

userRouter.use((request,response,next)=>{
    console.log("user Router executes");
    next();
});

userRouter.get("/",(request,response)=>{
    response.sendFile(path.join(__dirname,'/userhome.html'));
});
module.exports = userRouter;