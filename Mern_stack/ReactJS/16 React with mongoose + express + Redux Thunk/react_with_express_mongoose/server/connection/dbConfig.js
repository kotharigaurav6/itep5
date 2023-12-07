import mongoose from 'mongoose';
var url = "mongodb://127.0.0.1:27017/react_express_db";

var connection = mongoose.connect(url).then(()=>{
    console.log("Connection to mongoose established successfully");
}).catch((err)=>{
    console.log("Error while connecting with mongoose : "+err);
});

export default connection;