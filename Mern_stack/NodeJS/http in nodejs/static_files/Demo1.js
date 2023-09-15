// program showing the concept of serving static contents in a file

var http = require('http');
var fs = require('fs');
var url = require('url');

var serverInstance = http.createServer((request,response)=>{
    response.writeHead("200",{'content-type':'text/html'});
    var requestedURL = url.parse(request.url);
    console.log(request.url);
    if(requestedURL.pathname==''||requestedURL.pathname=='/'||requestedURL.pathname=='/home'){
        var data = fs.readFileSync("index.html");
        response.write(data);    
        response.end();
    }
    else if(requestedURL.pathname.match("\.css$")){
        response.writeHead("200",{'content-type':'text/css'});
        var data = fs.createReadStream("style.css");
        data.pipe(response);
    } 
    else if(requestedURL.pathname.match("\.jpg$")){
        response.writeHead("200",{'content-type':'image/jpg'});
        var data = fs.createReadStream("banner.jpg");
        data.pipe(response);
    } 
});

serverInstance.listen("3000",()=>{
    console.log("Server connection succesfull");
});