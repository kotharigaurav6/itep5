var http = require("http");
var fs = require("fs");

var serverInstance = http.createServer((request,response)=>{
    response.writeHead("200",{'content-type':'text/html'});
    if(request.url=='' || request.url=="/" || request.url=='/home'){    
            fs.readFile("home.html",(err,data)=>{
                if(err)
                    console.log(err);
                else
                    response.write(data);
                    response.end();
            })
    }
    else if(request.url=='/services'){    
        fs.readFile("services.html",(err,data)=>{
            if(err)
                console.log(err);
            else
                response.write(data);
                response.end();
        })
    }
    else if(request.url=='/feedback'){    
        fs.readFile("feedback.html",(err,data)=>{
            if(err)
                console.log(err);
            else
                response.write(data);
                response.end();
        })
    }
    else if(request.url=='/about'){    
        fs.readFile("about.html",(err,data)=>{
            if(err)
                console.log(err);
            else
                response.write(data);
                response.end();
        })
    }
 //   console.log("Code Ends");
   // response.end(); // doesn't prints anything because meanwhile readFile reads file , the control sends response with end().
});

    serverInstance.listen('3000',()=>{
    console.log("Server connection successfull");
});