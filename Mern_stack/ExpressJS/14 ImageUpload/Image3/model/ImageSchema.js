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
    file1 : {
        type: String,
        required : true
    },
    file2 : {
        type : String,
        required : true
    }
});

export default mongoose.model('imageSchema',ImageSchema,'ImageSchemaMulter');
