import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myfun(){
 try{   
    var dbInstance = await MongoClient.connect(url);
    var db = dbInstance.db("promongodb");
    var res =await db.createCollection("employer");
    console.log(res);
    console.log("Collection created successfully : "+res);
 
}catch(err){
    console.log("Already exist");
 }finally{
    dbInstance.close();
 }  
}
myfun();
