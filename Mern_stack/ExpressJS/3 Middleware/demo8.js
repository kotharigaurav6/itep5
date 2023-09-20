// program showing the concept of third-party middleware

var express = require("express");
var app = express();
var bodyparser = require("body-parser");
//app.use(bodyparser.urlencoded());
app.use(bodyparser.urlencoded({extended:false}));

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/demo2.html");
});

app.post("/viewInfo",(request,response)=>{
   // console.log(request.body);
   //console.log(request.body.username);
    response.write("<br>Username : "+request.body.username);
    response.write("<br>Email : "+request.body.email);
    response.write("<br>Password : "+request.body.password);
});

app.listen("4000",()=>{
    console.log("Server connection successfull");
});