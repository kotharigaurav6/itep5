var http = require("http");
var fs = require("fs");
var url = require("url");

var serverInstance = http.createServer((request,response)=>{
    response.writeHead("200",{'content-type':'text/html'});
    console.log(url.parse(request.url));
    var data = url.parse(request.url).query;
    response.write("<br>query : "+data);
    response.write("<br>typeof query : "+typeof data);

    var data1 = url.parse(request.url,true).query;
    console.log(data1);
    response.write("<br>typeof query : "+typeof data1);

    response.write("<br>path : "+url.parse(request.url).path);
    response.write("<br>pathname : "+url.parse(request.url).pathname);    
    response.end();
});

    serverInstance.listen('3000',()=>{
    console.log("Server connection successfull");
});