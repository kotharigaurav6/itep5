import mongoose from 'mongoose';
const UserSchema = mongoose.Schema({
    username : {
        type:String,
        required : true
    },
    _id : {
        type:String,
        required : true
    },
    password : {
        type:String,
        required : true
    },
    gender : {
        type:String,
        required : true
    },
    hobbies : {
        type:[String],
        required : true
    },
    subject : {
        type:String,
        required : true
    },  
    status : {
        type:String,
        default : "Not Verified"
    }
});

export default mongoose.model('userSchema',UserSchema,'user');