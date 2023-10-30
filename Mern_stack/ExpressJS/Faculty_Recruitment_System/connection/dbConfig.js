import mongoose from 'mongoose';
mongoose.connect("mongodb://127.0.0.1:27017/facultyrecruitmentitep5");
// mongoose.connect("mongodb+srv://kotharigaurav6:<your_password>@cluster0.m0bpqsg.mongodb.net/FacultyRecruitmentSystem?retryWrites=true&w=majority");

export default mongoose;