// program showing the concept of streams

var fs = require("fs");
var readStream = fs.createReadStream("myfolder/demo.txt");
readStream.on('data',(chunk)=>{
   // console.log(typeof chunk);
    var obj = JSON.parse(chunk);
    console.log(obj);
    console.log("Sid : "+obj.sid);
    console.log("Name : "+obj.name);
    console.log("Email : "+obj.email);
    console.log("City : "+obj.address.city);
    console.log("State : "+obj.address.state);
    console.log("Country : "+obj.address.country);  
});

