var express = require("express");
var app = express();
var ejs = require("ejs");

app.set("views","views");
app.set("view engine","ejs");

app.get("/",(request,response)=>{
    response.render("page2",{user:"Andrew Anderson"});
});
app.listen("3000",()=>{
    console.log("server connection successfull");
});
