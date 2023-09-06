// program showing the concept of streams (Duplex Stream)

var fs = require("fs");
var readfilePath = "myfolder/demo1.txt";
var writefilePath = "myfolder/demo11.txt";

var readStream = fs.createReadStream(readfilePath);
var writeStream = fs.createWriteStream(writefilePath);

readStream.pipe(writeStream);
readStream.on('end',()=>{
    console.log("Data transfering Completed");
});
