var http = require("http");
var fs = require("fs");
var url = require("url");

var serverInstance = http.createServer((request,response)=>{
    response.writeHead("200",{'content-type':'text/html'});
    var requestedURL = url.parse(request.url,true);
    if(requestedURL.pathname=='' || requestedURL.pathname=='/' || requestedURL.pathname=='/register')  {  
        fs.readFile("register.html",(err,data)=>{
            if(err)
                console.log(err);
            else
                response.write(data);
                response.end();
        })
    }
    else if(requestedURL.pathname=='/viewInfo'){
        var data = requestedURL.query;
        response.write("Details : <br>Username : "+data.username);
        response.write("<br>Email : "+data.email);
        response.write("<br>Password : "+data.password);
        response.write("<br>Address : "+data.address);
        response.end();
    }
});

    serverInstance.listen('3000',()=>{
    console.log("Server connection successfull");
});