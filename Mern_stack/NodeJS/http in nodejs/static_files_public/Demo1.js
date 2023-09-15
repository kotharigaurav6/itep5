// program showing the concept of serving static contents in a file

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

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
        console.log("css : "+request.url);
        response.writeHead("200",{'content-type':'text/css'});
       // var data = fs.createReadStream('public/style.css');
        var style_sheet = path.join(__dirname,"public",request.url);
        var data = fs.createReadStream(style_sheet);

        data.pipe(response);
    } 
    else if(requestedURL.pathname.match("\.jpg$")){
        console.log("image : "+request.url);
        response.writeHead("200",{'content-type':'image/jpg'});
        var banner = path.join(__dirname,"public",request.url);
        var data = fs.createReadStream(banner);
        data.pipe(response);
    } 
});

serverInstance.listen("3000",()=>{
    console.log("Server connection succesfull");
});