
var express = require("express");
var app = express();

app.get("/",(request,response)=>{
    response.send("<h1>Home</h1><br>");
});
app.post("/about",(request,response)=>{
    response.send("<h1>About</h1><br>");
});
app.put("/contact",(request,response)=>{
    response.send("<h1>Contact</h1><br>");
});
app.delete("/services",(request,response)=>{
    response.send("<h1>Services</h1><br>");
});
app.all("/feedback",(request,response)=>{
    response.send("<h1>Feedback</h1><br>");
});

app.listen("3000",()=>{
    console.log("Server connection successfull");
});