import http from 'http';
import url from 'url';
import fs from 'fs';
import {MongoClient} from 'mongodb';

var serverInstance = http.createServer(async(request,response)=>{
    response.writeHead(200,{"Content-Type":"text/html"});
    var requestedURL = url.parse(request.url,true);
    var mongo_url = "mongodb://127.0.0.1:27017/";

    if(requestedURL.pathname=='' || requestedURL.pathname=='/' || requestedURL.pathname=='/home'){
        var data = fs.readFileSync("index.html");
        response.write(data);
        response.end();
    }
    if(requestedURL.pathname=='/viewInfo'){
        var data = requestedURL.query;
        console.log(data);

        try{   
            var dbInstance = await MongoClient.connect(mongo_url);
            var db = dbInstance.db("node_mongodb");
            var res =await db.collection("employer").insertOne(data);
            console.log(res);
            console.log("Data Inserted successfully");
         
        }catch(err){
            console.log("Error : "+err);
         }finally{
            dbInstance.close();
         }  
        
    }
});

serverInstance.listen(3000,()=>{
    console.log("Server connection successfully");
})