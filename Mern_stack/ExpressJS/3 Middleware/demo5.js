// example of error handling middleware

var express = require("express");
const app = express();
app.get('/',(req,res,next)=>{
    var err = new Error("Error occured..!!");
    next(err);
});
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500).send("Error showing error handling middleware");
});
app.listen("3000",()=>{
    console.log("Server connection successfull");
});