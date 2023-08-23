// Examples based on callback

function getResult(fruits,callback){
    setTimeout(()=>{
        callback(fruits.sort());
    },1000);
}
function printFruits(fruits){
    console.log("Ascending order : "+fruits);
}
var fruits = ["mango","banana","apple"];
getResult(fruits,printFruits);