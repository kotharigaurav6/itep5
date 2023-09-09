// program showing the concept of streams

var fs = require("fs");
var readStream = fs.createReadStream("myfolder/jsonfile1.json");
readStream.on('data',(chunk)=>{
   // console.log(typeof chunk);
    var obj = JSON.parse(chunk);
    //console.log(obj);
    for(var object in obj){
        for(var index in obj[object]){
            if(typeof obj[object][index]==="object"){
                for(var subkey in obj[object][index]){
                    if(typeof obj[object][index][subkey]==="object")
                    {
                        /*  .....   */
                    }
                    else
                        console.log(subkey+"\t"+obj[object][index][subkey]);
                }
            }
            else
                console.log(index+"\t"+obj[object][index]);
        }
        console.log("########################################");
    }
});
readStream.on('end',()=>{
    console.log("No more Data to Read");
});
