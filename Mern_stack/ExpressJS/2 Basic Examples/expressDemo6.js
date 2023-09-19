
var express = require("express");
var app = express();
var url = require("url");

app.get("/",(request,response)=>{
  //  response.send("url : "+request.url);
  //  response.send(request.query);
   
    // var x = url.parse(request.url).query;
    // response.send(x);

    var x = url.parse(request.url,true).query;
    //response.send(x);
    response.send(x.username+"<br>"+x.email);
});

app.listen("3000",()=>{
    console.log("Server connection successfull");
});