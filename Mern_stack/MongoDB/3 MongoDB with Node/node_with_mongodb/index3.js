import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myfun(){
 try{   
    var dbInstance = await MongoClient.connect(url);
    var db = dbInstance.db("promongodb2");
    var res =await db.dropDatabase();
    console.log(res);
    console.log("Database deleted successfully");
 
}catch(err){
    console.log("Error : "+err);
 }finally{
    dbInstance.close();
 }  
}
myfun();
