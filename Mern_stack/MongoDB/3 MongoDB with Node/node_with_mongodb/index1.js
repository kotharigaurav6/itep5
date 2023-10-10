/*
import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/promongodb";

async function myfun(){
    var dbInstance = await MongoClient.connect(url);
    console.log("Database created successfully");
    dbInstance.close();
}
myfun();
*/

import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myfun(){
    var dbInstance = await MongoClient.connect(url);
    dbInstance.db("promongodb");
    console.log("Database created successfully");
    dbInstance.close();
}
myfun();
