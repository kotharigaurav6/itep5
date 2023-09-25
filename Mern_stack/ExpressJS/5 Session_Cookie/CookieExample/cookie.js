// program showing the concept of cookie

var express = require("express");
var cookieparser = require("cookie-parser");
var app = express();

app.use(cookieparser());
app.get("/",(request,response)=>{
    // setting the cookie
    response.cookie("mycookie","my_first_cookie",{expire:360000+Date.now()});
    response.send("Cookie Set");
});
app.get("/showcookie",(request,response)=>{
    // showing the cookie
    console.log(request.cookies);
    response.send(request.cookies);
});
app.get("/deletecookie",(request,response)=>{
    // clearing the cookie
    response.clearCookie("mycookie");
    response.send("Cookie deleted");
});

app.listen("3000",()=>{
    console.log("Server connection successfull");
});