var http = require("http");
var fs = require("fs");
var url = require("url");

var serverInstance = http.createServer((request,response)=>{
    response.writeHead("200",{'content-type':'text/html'});
    var requestedURL = url.parse(request.url).pathname;

    if(requestedURL=="" || requestedURL=="/" || requestedURL=="/home")
    response.write("<h1>Home Page</h1>");

    else if(requestedURL=="/about")
        response.write("<h1>About Us Page</h1>");

    else if(requestedURL=="/contact")
        response.write("<h1>Contact Us Page</h1>");

    else if(requestedURL=="/services")
        response.write("<h1>Services Page</h1>");

    else if(requestedURL=="/feedback")
        response.write("<h1>Feedback Page</h1>");

    response.end();
});

serverInstance.listen('3000',()=>{
    console.log("Server connection successfull");
});