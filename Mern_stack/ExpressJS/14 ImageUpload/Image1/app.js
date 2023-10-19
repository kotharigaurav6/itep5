import express, { response } from 'express';
import expressFileUpload from 'express-fileupload';
import path from 'path';
import { fileURLToPath } from 'url';

var app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(expressFileUpload());
//app.use(express.static('/public/images/'));

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/index.html");
});

app.post("/upload",(request,response)=>{
    var filename = request.files.myImage;
    console.log(filename);
    var fileName = new Date().getTime()+filename.name;
    var pathname = path.join(__dirname,"/public/images/",fileName);
    filename.mv(pathname,(err)=>{
        if(err)
            console.log("Error while uploading file");
        else
            console.log("Image Uploaded Successfully");
    })
    response.sendFile(__dirname+"/index.html");
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});