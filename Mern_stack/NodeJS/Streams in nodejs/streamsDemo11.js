// program showing the concept of streams

var fs = require("fs");
var obj = {
    sid : 101,
    name:"Andrew Anderson",
    email:"andrew@gmail.com",
    address:{
        city:"indore",
        state : "MP",
        country : "India"
    }
}
var writeStream = fs.createWriteStream("myfolder/demo.txt");
writeStream.write(JSON.stringify(obj));
console.log("Data inserted successfully");

