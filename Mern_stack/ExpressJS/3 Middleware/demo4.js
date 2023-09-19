
var express = require("express");
var app = express();

var middleware1 = function myfun1(req,res,next){
    res.writeHead("200",{'content-type':'text/html'}); 
    res.write("middleware1 example");
    next();
};
var middleware2 = function myfun2(req,res,next){
    res.write("<br>example of middleware2");
    next();
};

app.use(middleware1);
app.use(middleware2);

app.get('/',(req,res)=>{
    res.write("<br>Example of application level midleware");
    res.end();
});
app.get('/home',(req,res)=>{
    res.write("<br>Example of application level midleware /home");
    res.end();
});

app.listen("3000",()=>{
    console.log("Connection established successfully");
});