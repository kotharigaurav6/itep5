import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myfun(){
 try{   
    var dbInstance = await MongoClient.connect(url);
    var db = dbInstance.db("promongodb");
    var data = [{
        name : "Mathew Math",
        salary : 45000,
        age : 35,
        state : "Madhya Pradesh"
    },{
        name : "Peter Park",
        salary : 55000,
        age : 25,
        state : "Rajasthan"
    },{
        name : "Jackson Jack",
        salary : 15000,
        age : 45,
        state : "Delhi"
    }];
    var res =await db.collection("employer").insertMany(data);
    console.log(res);
    console.log("Data Inserted successfully");
 
}catch(err){
    console.log("Error : "+err);
 }finally{
    dbInstance.close();
 }  
}
myfun();
