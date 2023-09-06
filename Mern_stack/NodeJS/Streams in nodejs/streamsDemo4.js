// program showing the concept of streams

var fs = require("fs");
console.log("Going to insert Data");
// var writeStream = fs.createWriteStream("myfolder/demo1.txt");
var writeStream = fs.createWriteStream("myfolder/demo1.txt",{flags:'a'});

writeStream.write(" Going to append data");
writeStream.close();

writeStream.on('finish',()=>{
    console.log("Data inserted succssfully");
});
