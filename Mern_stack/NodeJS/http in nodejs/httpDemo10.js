var http = require("http");
var fs = require("fs");
var count=0;
var serverInstance = http.createServer((request,response)=>{
    count++;
    response.writeHead("200",{'content-type':'text/html'});
    if(request.url=='' || request.url=="/" || request.url=='/home'){    
            var data = fs.readFileSync("home.html",'utf-8');
            response.write(data);
          //  response.end();
    }
    else if(request.url=='/services'){    
        var data = fs.readFileSync("services.html");
            response.write(data);
            //response.end();
    }
    else if(request.url=='/feedback'){    
        var data = fs.readFileSync("feedback.html");
            response.write(data);
           // response.end();
    }
    else if(request.url=='/about'){    
        var data = fs.readFileSync("about.html");
            response.write(data);
           // response.end();
    }
    console.log("Code Ends : "+count+" "+request.url);
    response.end(); 
    /*
        why code ends prints multiple times ? 
        Reason is : when we send request to server, there are multiple or several requests going to send along with our request (like for static files .cc .js and image files), so with all this favicon.ico is also going to hit with our request , so one option is to block the favicon.ico request from browser or can deal with multiple console prints.
    */
});

    serverInstance.listen('3000',()=>{
    console.log("Server connection successfull");
});