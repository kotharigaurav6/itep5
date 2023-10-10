import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myfun(){
 try{   
    var dbInstance = await MongoClient.connect(url);
    var db = dbInstance.db("promongodb");
    var data = {
        name : "Andrew Anderson",
        salary : 35000,
        age : 45,
        state : "Madhya Pradesh"
    };
    var res =await db.collection("employer").insertOne(data);
    console.log(res);
    console.log("Data Inserted successfully");
 
}catch(err){
    console.log("Error : "+err);
 }finally{
    dbInstance.close();
 }  
}
myfun();
