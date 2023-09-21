var express = require("express");
var app = express();
var ejs = require("ejs");

app.set("views","views");
app.set("view engine","ejs");
app.use(express.static('public'));

app.get("/",(request,response)=>{
    response.render("index");
});
app.get("/about",(request,response)=>{
    response.render("about");
});

app.listen("3000",()=>{
    console.log("server connection successfull");
});
