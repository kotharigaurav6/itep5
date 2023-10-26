import mongoose from "../connection/dbConfig.js";

var vacancySchema = mongoose.Schema({
    post : {
        type:String,
        required:true
    },
    subject: {
        type:String,
        required:true
    },
    location : {
        type:String,
        required:true
    },
    criteria:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    vacancy:{
        type:Number,
        required : true
    },
    salary:{
        type:Number,
        required:true
    },
    advdate:{
        type:String,
        required:true
    },
    lastdate:{
        type:String,
        required:true
    },
    recruiteremail:{
        type:String,
        required:true
    },
    recruitertype:{
        type:String,
        required:true
    },
    recruitername:{
        type:String,
        required:true
    }
});

export default mongoose.model('vacancyModel',vacancySchema,'vacancy');