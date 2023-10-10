import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myfun(){
 try{   
    var dbInstance = await MongoClient.connect(url);
    var db = dbInstance.db("promongodb");
 
    var innersal = await db.collection("employer").find().sort({salary:-1}).toArray();
    var isal = innersal[0].salary;
    //console.log(isal);

    var subsal = await db.collection("employer").find({salary : {$ne : isal}}).sort({salary:-1}).toArray();
    var ssal = subsal[0].salary;

var res =await db.collection("employer").find({salary:ssal},{_id:0}).toArray();

// var res =await db.collection("employer").find({
//    salary : db.collection("employer").find({
//        salary : {
//            $ne : db.collection("employer").find().sort({salary:-1}).toArray()[0].salary
//        }
//    }).sort({salary:-1}).toArray()[0].salary
// },{_id:0}).toArray();

console.log(res); 
}catch(err){
    console.log("Error : "+err);
 }finally{
    dbInstance.close();
 }  
}
myfun();
