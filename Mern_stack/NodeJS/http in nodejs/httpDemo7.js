var http = require("http");
var serverInstance = http.createServer((request,response)=>{
    response.writeHead("200",{'content-type':'text/html'});
    if(request.url=="" || request.url=="/" || request.url=="/home")
        response.write("<h1>Home Page</h1>");

    else if(request.url=="/about")
        response.write("<h1>About Us Page</h1>");

    else if(request.url=="/contact")
        response.write("<h1>Contact Us Page</h1>");

    else if(request.url=="/services")
        response.write("<h1>Services Page</h1>");
    
    else if(request.url=="/feedback")
        response.write("<h1>Feedback Page</h1>");

    response.end();    
    });

serverInstance.listen('3000',()=>{
    console.log("Server connection successfull");
});