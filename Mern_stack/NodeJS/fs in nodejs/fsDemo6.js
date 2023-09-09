// program (Synchronous)

var fs = require("fs");
console.log("Before Execution");
var data = "\n Again going to insert data..!!";
var res = fs.writeFileSync("demo.txt",data);
// console.log(res); // return mechanism of writeFileSync is undefined
console.log("Data inserted successfully");
console.log("After Execution");
