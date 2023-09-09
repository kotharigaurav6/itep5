// program

var http = require("http");
var serverInstance = http.createServer((request,response)=>{
    console.log("This is an example of Http module");
});

serverInstance.listen("3000");