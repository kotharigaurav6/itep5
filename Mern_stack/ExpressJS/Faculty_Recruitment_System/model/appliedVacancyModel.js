import mongoose from "../connection/dbConfig.js";

var appliedVacancySchema = mongoose.Schema({
    vid : {
        type:String,
        required:true
    },
    candidateemail: {
        type:String,
        required:true
    },
    recruiteremail : {
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"Applied"
    }
});

export default mongoose.model('appliedVacancyModel',appliedVacancySchema,'appliedVacancy');