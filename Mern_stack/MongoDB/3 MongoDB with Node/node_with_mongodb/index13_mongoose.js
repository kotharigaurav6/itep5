import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/newmong";
mongoose.connect(url);

const Employer = mongoose.Schema({
    username : {
        type:String,
        required:true,
        trim:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const EmpModel = mongoose.model('empModel',Employer,'employer');
var data = {
    username : "Andrew Anderson",
    email : "andrew@gmail.com",
    password : "andrew@123",
    address : "Indore"
}
const Emp = new EmpModel(data);
Emp.save();
console.log("Data inserted succesfully");