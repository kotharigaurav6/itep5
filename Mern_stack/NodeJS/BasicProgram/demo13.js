// Examples based on callback

function getResult(numbers,callback){
    if(numbers.length==0){
        callback("Empty Array",null);
    }
    else{
        var res = numbers.reduce((initial,second)=>{
            return initial+second
        });
        callback(null,res);
    }
}
function result(err,sum){
    if(err)
        console.log(err);
    else
        console.log("Sum : "+sum);
}
var numbers = [12,23,34,45,56];
getResult(numbers,result);