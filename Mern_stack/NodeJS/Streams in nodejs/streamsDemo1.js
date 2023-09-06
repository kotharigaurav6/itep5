// program showing the concept of streams

var fs = require("fs");
//console.log(typeof fs);
//console.log(""+fs);
//console.log(fs);

fs.mkdir('myfolder',(err) => {
    if(err){
        //console.log(""+err);
        console.log("Folder already exist");
    }else
        console.log("Folder created successfully");
});
