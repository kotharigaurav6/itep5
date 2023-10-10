import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myfun(){
 try{   
    var dbInstance = await MongoClient.connect(url);
    var db = dbInstance.db("promongodb");
    var res =await db.collection("employer").updateOne({name:"Andrew Anderson"},{$set : {age : 100}});
    console.log(res); 
    console.log("Data updated successfully");
}catch(err){
    console.log("Error : "+err);
 }finally{
    dbInstance.close();
 }  
}
myfun();
