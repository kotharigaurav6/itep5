// program

var http = require("http");
var serverInstance = http.createServer((request,response)=>{
    console.log("This is an example of http module");
});

serverInstance.listen("3000",()=>{
    console.log("Server connection succesfull");
});