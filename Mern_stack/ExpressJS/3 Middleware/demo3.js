// example of Application level middleware (Top level middleware)

//note :  block favicon.ico
var express = require("express");
var app = express();

app.use(function myfun1(req,res,next){
    res.writeHead("200",{'content-type':'text/html'}); 
    res.write("middleware1 example");
    setTimeout(()=>{
        next();
    },5000);
    console.log("first");
});
app.use(function myfun2(req,res,next){
    res.write("<br>example of middleware2");
    console.log("second");
    next();
});

app.get('/',(req,res)=>{
    console.log("third");
    res.write("<br>Example of application level midleware");
    res.end();
});

app.listen("3000",()=>{
    console.log("Connection established successfully");
});