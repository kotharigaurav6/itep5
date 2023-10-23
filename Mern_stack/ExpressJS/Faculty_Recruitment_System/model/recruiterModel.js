import mongoose from "../connection/dbConfig.js";

var recruiterSchema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    type: {
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
    contact:{
        type:String,
        required:true
    },
    address:{
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
    adminverify:{
        type:String,
        default:"Not Verified"
    }
});

export default mongoose.model('recruiterModel',recruiterSchema,'recruiter');