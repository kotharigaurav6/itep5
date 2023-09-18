const { response } = require("express");
var express = require("express");
var app = express();

app.get("/",(request,response)=>{
    response.writeHead("200",{'content-type':'text/html'});
    response.write("This is an example of Express<br>");
    response.write("This is an example of Express<br>");
    response.end();
});

app.listen("3000",()=>{
    console.log("Server connection successfull");
});