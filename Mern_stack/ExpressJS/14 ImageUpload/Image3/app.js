import express, { response } from 'express';
import multer from 'multer';
import ejs from 'ejs';
import ImageSchema from './model/ImageSchema.js';
import urlconnection from './database/config.js';
import mongoose from 'mongoose';

var app = express();
app.set("views","views");
app.set("view engine","ejs");

app.use(express.static('public'));
mongoose.connect(urlconnection.url);

app.get("/",(request,response)=>{
    response.render("demo");
});
app.get("/upload",(request,response)=>{
    response.render("index");
});

var storage = multer.diskStorage({
    destination : "./public/images",
    filename : (request,file,callback)=>{
        callback(null,new Date().getTime()+file.originalname);
    }
});

var uploads = multer({storage:storage});

app.post("/upload",uploads.fields([{name:'file1',maxCount:1},{name:'file2',maxCount:1}]),async (request,response)=>{

    var file1 = request.files['file1'][0];
    var file2 = request.files['file2'][0];

    try{
        var filedata = {
         username : request.body.username,
         description : request.body.description,
         file1 : file1.filename,
         file2 : file2.filename
        }
        console.log(filedata); 
        await ImageSchema.create(filedata);
        console.log("Image Uploaded Successfully in database");
        var imageData = await ImageSchema.find();
        response.render("gallery",{imageData:imageData}); 
     }catch(err){
         console.log("Error while dealing with a file : "+err);
     }

});

app.get("/gallery",async (request,response)=>{
    try{
        var imageData = await ImageSchema.find();
        console.log(imageData);
        response.render("gallery",{imageData:imageData});
    }catch(err){
        console.log("Error while fetching data for gallery : "+err);
        response.render("demo");
    }
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});