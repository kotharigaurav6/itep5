// Examples based on callback

function getResult(limit,callback){
    var x = setInterval(()=>{
        console.log(limit--);
        if(limit==0)
        {   
            clearInterval(x);
            callback("Time's Up");
        }        
    },1000);
}
function myCallback(msg){
    console.log(msg);
}
getResult(10,myCallback);