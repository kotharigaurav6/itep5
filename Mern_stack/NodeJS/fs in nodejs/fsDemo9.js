// program

var path = require("path");
console.log("Directory name : "+__dirname);
console.log("\nFile name : "+__filename);

var data = __filename;
console.log("basename : "+path.basename(data));
console.log("\nextname : "+path.extname(data));
console.log("\ndirname : "+path.dirname(data));
console.log("\nnormalize : "+path.normalize(data));
