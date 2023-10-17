import mongoose from "mongoose";
const User = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
});

export default mongoose.model("userModel",User,'user');