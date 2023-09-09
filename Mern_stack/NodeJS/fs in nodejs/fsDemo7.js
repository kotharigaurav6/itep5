// program (Synchronous)

var fs = require("fs");
console.log("Before Execution");
var res = fs.readFileSync("demo.txt",'utf-8');
//console.log(""+res); 
console.log(res); 
console.log("After Execution");
