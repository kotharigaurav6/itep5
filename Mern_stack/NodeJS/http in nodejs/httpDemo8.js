var http = require("http");
var fs = require("fs");

var serverInstance = http.createServer((request,response)=>{
    response.writeHead("200",{'content-type':'text/html'});
        fs.readFile("demo1.html",(err,data)=>{
            if(err)
                console.log(err);
            else
                response.write(data);
                response.end();
        })
});

    serverInstance.listen('3000',()=>{
    console.log("Server connection successfull");
});