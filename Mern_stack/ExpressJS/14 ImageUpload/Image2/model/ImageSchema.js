import mongoose from 'mongoose';
var ImageSchema = mongoose.Schema({
    username : {
        type:String,
        required : true
    },
    description : {
        type:String,
        required : true
    },
    imagename : {
        type: String,
        required : true
    }
});

export default mongoose.model('imageSchema',ImageSchema,'ImageSchema');
