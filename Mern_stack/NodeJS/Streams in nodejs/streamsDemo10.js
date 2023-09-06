// program showing the concept of streams (Transform Stream)

var fs = require("fs");
var zlib = require("zlib"); 
var gzip = zlib.createGunzip();

var readStream = fs.createReadStream("myfolder/demo1.txt.zip");
var writeStream = fs.createWriteStream("myfolder/demo1.txt");

readStream.pipe(gzip).pipe(writeStream);
console.log("Zip folder extracted");