// program showing the concept of streams

var fs = require("fs");
var obj = [{
    sid : 101,
    name:"Andrew Anderson",
    email:"andrew@gmail.com",
    address:{
        city:"indore",
        state : "MP",
        country : "India"
    }
},{
    sid : 102,
    name:"Mathew Math",
    email:"mathew@gmail.com",
    address:{
        city:"dewas",
        state : "MP",
        country : "India"
    }
},{
    sid : 103,
    name:"Simon Sim",
    email:"simon@gmail.com",
    address:{
        city:"indore",
        state : "MP",
        country : "India"
    }
}]
var writeStream = fs.createWriteStream("myfolder/jsonfile.json");
writeStream.write(JSON.stringify(obj));
writeStream.close();
writeStream.on('close',()=>{
    console.log("Data inserted successfully");
});

