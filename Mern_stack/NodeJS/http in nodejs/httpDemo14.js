var http = require("http");
var fs = require("fs");
var url = require("url");

    var serverInstance = http.createServer((request,response)=>{
    response.writeHead("200",{'content-type':'text/html'});
    var requestedURL = url.parse(request.url).pathname;

    if(requestedURL=="" || requestedURL=="/" || requestedURL=="/home" && request.method=='GET') 
    response.write("<h1>Home Page</h1>");
        /* for executing rest of the methods , we needs to use Rested Extension on mozila firefox or postman on chrome */
    else if(requestedURL=="/about" && request.method=='POST')
        response.write("<h1>About Us Page</h1>");

    else if(requestedURL=="/contact" && request.method=='DELETE')
        response.write("<h1>Contact Us Page</h1>");

    else if(requestedURL=="/services" && request.method=='PUT')
        response.write("<h1>Services Page</h1>");

    response.end();
});

serverInstance.listen('3000',()=>{
    console.log("Server connection successfull");
});