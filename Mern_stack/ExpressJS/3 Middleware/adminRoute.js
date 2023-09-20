// adminRoute

var express = require("express");
var path = require("path");
var adminRouter = express.Router();

adminRouter.use((request,response,next)=>{
    console.log("admin Router executes");
    next();
});

adminRouter.get("/",(request,response)=>{
    response.sendFile(path.join(__dirname,'./adminhome.html'));
});
module.exports = adminRouter;