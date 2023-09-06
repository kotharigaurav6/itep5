// program showing the concept of streams

var fs = require("fs");
// fs.createWriteStream("demo.txt");
// console.log("File Created Successfully");

var writeStream = fs.createWriteStream("myfolder/demo1.txt");
console.log("File Created Successfully");
//console.log(writeStream);