// program showing the concept of streams (Duplex Stream)

var fs = require("fs");
var readfilePath = "myfolder/demo1.txt";
var writefilePath = "myfolder/demo11.txt";

var readStream = fs.createReadStream(readfilePath);
var readStream1 = fs.createReadStream(readfilePath);

var writeStream = fs.createWriteStream(writefilePath);
var data_status=false;

readStream.on('data',function(){
    data_status=true;
    readStream1.pipe(writeStream);
    console.log("Data transfering Completed");
});
readStream.on('end',()=>{
    if(!data_status)
        console.log("File is empty");
});
