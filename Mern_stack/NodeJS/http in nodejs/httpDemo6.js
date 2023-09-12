var http = require("http");
var serverInstance = http.createServer((request,response)=>{
    response.writeHead("200",{'content-type':'text/html'});
    console.log(request);
    response.write("<br>url : "+request.url);
    response.write("<br>method : "+request.method);
    response.write("<br>host : "+request.headers.host);
    response.write("<br>header : "+request.headers["cache-control"]);
    response.end();
});

serverInstance.listen('3000',()=>{
    console.log("Server connection successfull");
});