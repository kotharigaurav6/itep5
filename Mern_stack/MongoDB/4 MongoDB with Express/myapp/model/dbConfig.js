import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";
async function createConnection(){
    var dbInstance =await MongoClient.connect(url);
    var db = dbInstance.db("expressdb");
   // console.log(db);
    return db;
}
export default createConnection;

