// Examples based on callback

function getResult(a,b,callback){
    setTimeout(()=>{
        callback(a+b);
    },1000);
}
function result(res){
    console.log("Result : "+res);
}
getResult(100,200,result);