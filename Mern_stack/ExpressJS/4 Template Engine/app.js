var express = require("express");
var app = express();

//  request object properties and methods
app.use((request,response)=>{
  //  response.send(request.query);
  //  response.send(request.url);
  //response.send(request.path);
//   response.send(request.protocol);
//   response.send(request.host);
//   response.send(request.method);
//   response.send(request.ip);

response.send(request.param('username')+"  "+request.param('password'));
});

app.listen("4000",()=>{
    console.log("server connection successfull");
});
