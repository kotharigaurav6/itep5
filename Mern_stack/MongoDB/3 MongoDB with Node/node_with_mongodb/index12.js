import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myfun(){
 try{   
    var dbInstance = await MongoClient.connect(url);
    var db = dbInstance.db("firstmongodb");
 
    var result = await db.collection("product").aggregate([{
        $lookup:{
            from:"category",
            foreignField:"cat_id",
            localField : "category_id",
            as:"Product Details"
        }
    }]).toArray();
    for(var index in result){
        console.log(JSON.stringify(result[index]));
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    }
       
}catch(err){
    console.log("Error : "+err);
 }finally{
    dbInstance.close();
 }  
}
myfun();
