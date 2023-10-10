import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

//console.log(""+MongoClient);

// not works
// MongoClient.connect(url,async (err,dbInstance)=>{
//     if(err)
//         console.log("Error occured : "+err);
       
//         console.log("Connection to mongodb is successfull : "+dbInstance);
// });


async function myfun(){
    var dbInstance = await MongoClient.connect(url);
    //console.log(dbInstance);
    console.log("Connection to mongodb is successfull : "+dbInstance);
}
myfun();

