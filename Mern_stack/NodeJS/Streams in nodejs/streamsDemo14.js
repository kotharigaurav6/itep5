// program showing the concept of streams

var fs = require("fs");
var readStream = fs.createReadStream("myfolder/jsonfile.json");
readStream.on('data',(chunk)=>{
   // console.log(typeof chunk);
    var obj = JSON.parse(chunk);
    //console.log(obj);
    obj.map((info)=>{
        console.log("Sid : "+info.sid);
        console.log("Name : "+info.name);
        console.log("Email : "+info.email);
        console.log("City : "+info.address.city);
        console.log("State : "+info.address.state);
        console.log("Country : "+info.address.country);  
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    });
});
readStream.on('end',()=>{
    console.log("No more Data to Read");
});
