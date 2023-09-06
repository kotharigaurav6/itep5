// program showing the concept of streams

var fs = require("fs");
console.log("Going to insert Data");
// var writeStream = fs.createWriteStream("myfolder/demo1.txt");
var writeStream = fs.createWriteStream("myfolder/demo1.txt",{flags:'w'});

writeStream.write("This is an example of streams..!!");
console.log("Data inserted succssfully");
