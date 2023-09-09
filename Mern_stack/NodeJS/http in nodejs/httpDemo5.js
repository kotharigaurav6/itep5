// program

var http = require("http");
var serverInstance = http.createServer((request,response)=>{
    response.writeHead("200",{'content-type':"text/html"});
    response.write("Hello Andrew <h1>This is an Heading</h1>");
    response.write("This is an example of http module");
    response.end();
});

serverInstance.listen("3000",()=>{
    console.log("Server connection succesfull");
});