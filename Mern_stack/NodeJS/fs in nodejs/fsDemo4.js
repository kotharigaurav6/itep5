// program (Asynchronous)

var fs = require("fs");
console.log("Before Execution");
var data = "\n Again going to insert data";
//fs.writeFile("demo.txt",data,(error)=>{
fs.appendFile("demo.txt",data,(error)=>{
    if(error)
        console.log("Error while dealing with a file");
    else
        console.log("Data Inserted Successfully");
});
console.log("After Execution");
