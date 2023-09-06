// program showing the concept of streams

var fs = require("fs");
console.log("Going to read Data");
var readStream = fs.createReadStream("myfolder/demo1.txt",'utf-8',{flags:'r'});
readStream.on('data',function(chunk){
    // console.log(chunk);
    // console.log(chunk.toString());
    console.log(chunk);
});

readStream.on('end',()=>{
    console.log("No more data to read.");
});