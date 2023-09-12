var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");

var serverInstance = http.createServer((request,response)=>{
    response.writeHead("200",{'content-type':'text/html'});
    var requestedURL = url.parse(request.url,true);
    if(requestedURL.pathname=="" || requestedURL.pathname=='/' || requestedURL.pathname=='/register'){
        fs.readFile("registerPost.html",(err,data)=>{
            if(err)
                console.log("Error : "+err);
            else
                response.write(data);
                response.end();
        });
    }
    else if(requestedURL.pathname=='/viewInfo'){
        /*
        // output : undefined in all fields
        var data = requestedURL.query;
        response.write("Details : <br>Username : "+data.username);
        response.write("<br>Email : "+data.email);
        response.write("<br>Password : "+data.password);
        response.write("<br>Address : "+data.address);
        */
        /*
        output : username=andrewanderson&email=andrew%40gmail.com&password=jkkjhhj&address=Indore

        request.on('data',(chunk)=>{
            console.log(chunk.toString());
        });
        */
        var chunkData = '';
        request.on('data',(chunk)=>{
            chunkData+=chunk;
        });
        request.on('end',()=>{
            var data = qs.parse(chunkData);
            response.write("Details : <br>Username : "+data.username);
            response.write("<br>Email : "+data.email);
            response.write("<br>Password : "+data.password);
            response.write("<br>Address : "+data.address);    
           response.end();    
        })
            
    }
});

serverInstance.listen('3000',()=>{
    console.log("Server connection successfull");
});