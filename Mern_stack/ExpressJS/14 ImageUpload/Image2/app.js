import express, { response } from 'express';
import expressFileUpload from 'express-fileupload';
import path from 'path';
import ejs from 'ejs';
import { fileURLToPath } from 'url';
import ImageSchema from './model/ImageSchema.js';
import urlconnection from './database/config.js';
import mongoose from 'mongoose';

var app = express();
app.set("views","views");
app.set("view engine","ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(expressFileUpload());
app.use(express.static('public'));
mongoose.connect(urlconnection.url);

app.get("/",(request,response)=>{
    response.render("demo");
});
app.get("/upload",(request,response)=>{
    response.render("index");
});

app.post("/upload",(request,response)=>{
    var filename = request.files.myImage;
    console.log(filename);
    var fileName = new Date().getTime()+filename.name;
    var pathname = path.join(__dirname,"/public/images/",fileName);
    filename.mv(pathname,async(err)=>{
        if(err){
            console.log("Error while uploading file");
            response.render("index");
        }
        else{
            console.log("Image Uploaded Successfully");
            try{
               // console.log(request.body);
               var filedata = {
                username : request.body.username,
                description : request.body.description,
                imagename : fileName
               }
               console.log(filedata); 
               await ImageSchema.create(filedata);
               console.log("Image Uploaded Successfully in database");
               var imageData = await ImageSchema.find();
               response.render("gallery",{imageData:imageData}); 
            }catch(err){
                console.log("Error while dealing with a file : "+err);
            }
        }
    })
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