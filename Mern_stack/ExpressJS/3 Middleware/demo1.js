
var express = require("express");
var app = express();

function myfun1(req,res,next){
    res.writeHead("200",{'content-type':'text/html'});
    
    res.write("middleware1");
    next();
}
function myfun2(req,res,next){
    res.write("<br>middleware2");
    res.end();
}

app.get('/',myfun1,myfun2);

app.listen("3000",()=>{
    console.log("Connection established successfully");
});