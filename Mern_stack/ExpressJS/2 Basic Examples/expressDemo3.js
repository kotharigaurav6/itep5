// npm install -D nodemon (dev dependencies)

var express = require("express");
var app = express();

app.get("/",(request,response)=>{
    response.send("This is an example of Express..!!!!!!<br>");
});

app.listen("3000",()=>{
    console.log("Server connection successfull");
});