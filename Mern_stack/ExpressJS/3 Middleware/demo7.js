// program showing the concept of built-in middleware

var express = require("express");
var app = express();
app.use(express.static(__dirname));

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/demo1.html");
});
app.listen("4000",()=>{
    console.log("Server connection successfull");
});