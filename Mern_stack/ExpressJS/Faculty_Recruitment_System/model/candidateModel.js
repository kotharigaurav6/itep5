import mongoose from "../connection/dbConfig.js";

var candidateSchema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    _id : {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    percentage:{
        type:Number,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
    emailverify:{
        type:String,
        default:"Not Verified"
    },
    docs:{
        type:String,
        required:true
    }
});

export default mongoose.model('candidateModel',candidateSchema,'candidate');