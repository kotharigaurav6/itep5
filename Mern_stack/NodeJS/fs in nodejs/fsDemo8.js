// program to get info

var fs = require("fs");
fs.stat("demo.txt",(error,info)=>{
    if(error)
        console.log("Error : "+error);
    else
    {
//        console.log(info);
        console.log("isDirectory : "+info.isDirectory());
        console.log("isFile : "+info.isFile());
    }
});

fs.stat("myfolder",(error,info)=>{
    if(error)
        console.log("Error : "+error);
    else
    {
  //      console.log(info);
        console.log("isDirectory : "+info.isDirectory());
        console.log("isFile : "+info.isFile());
    }
});