var express = require("express");
var app = express();

//  response object properties and methods
app.use((request,response)=>{
    console.log(response.headersSent);
    response.send("ok");
    console.log(response.headersSent);
    
    // response.send()
    // response.end()
    //response.render()
    //response.json()
    //response.status()
});

app.listen("4000",()=>{
    console.log("server connection successfull");
});
