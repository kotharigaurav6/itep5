// program showing the concept of streams (Transform Stream)

var fs = require("fs");
var zlib = require("zlib"); 
var gzip = zlib.createGzip();
//console.log(typeof gzip);

var readStream = fs.createReadStream("myfolder/demo1.txt");
var writeStream = fs.createWriteStream("myfolder/demo1.txt.zip");

// var obj = readStream.pipe(gzip);
// obj.pipe(writeStream);

readStream.pipe(gzip).pipe(writeStream);
console.log("Zip folder created");