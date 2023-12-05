import mongoose from "mongoose";

var userSchema = mongoose.Schema({
    username : {
        type:String,
        required:[true,"Username Required"],
    },
    email : {
        type:String,
        required:[true,"Email Required"],
        unique:true
    },
    password:{
        type:String,
        required :[true,"Password Required"]
    },
    address:{
        type:String,
        required:[true,"Address Required"]
    }
},{versionKey:false});

export default mongoose.model('userSchema',userSchema,'user');