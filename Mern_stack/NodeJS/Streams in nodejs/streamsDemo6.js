// program showing the concept of streams

var fs = require("fs");
var filePath = "myfolder/demo11.txt";
var readStream = fs.createReadStream(filePath);

readStream.on('error',(err)=>{
   // console.log("message : "+err.message);
   // console.log("code : "+err.code);
    if(err.code=="ENOENT"){
        console.log(`File ${filePath} doesn't exist`);
        console.log('Going to create File');
        fs.createWriteStream(filePath);
        console.log(`File ${filePath} created successfully`);
    }
});
readStream.on('open',()=>{
    console.log(`File ${filePath} exists`);
});