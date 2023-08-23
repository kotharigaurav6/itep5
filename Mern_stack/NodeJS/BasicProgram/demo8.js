// Examples based on callback

function getResult(callback){
    setTimeout(()=>{
        var obj = {
            name:"Andrew",
            age:45
        }
        callback(obj);
    },1000);
}
function printData(obj){
    console.log(`Hello ${obj.name}, your age is ${obj.age}`);
}
getResult(printData);


// function getDetails(name,age){
//     this.name=name;
//     this.age=age;
// }
// function myFun(callback){
//     var obj = new getDetails("Andrew",56);
//     setTimeout(()=>{
//         callback(obj);
//     });
// }
// function newFun(obj){
//     console.log(obj.name+" "+obj.age);
// }
// myFun(newFun);