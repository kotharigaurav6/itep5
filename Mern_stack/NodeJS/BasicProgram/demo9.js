// Examples based on callback

// function weather(temp,condition,callback){
//     this.temp=temp;
//     this.condition=condition;
//     callback(this);
// }
// function displayWeather(obj){
//     console.log(`Weather : ${obj.temp} and condition : ${obj.condition}`);
// }
// new weather(34,'Rainy',displayWeather);

function getResult(callback){
   setTimeout(()=>{
       var obj = {
        temp : 45,
        condition : "Sunny"
    }
    callback(obj);
    },1000);
}
function myFun(obj){
    console.log(`Temperature : ${obj.temp} and condition : ${obj.condition}`);
}
getResult(myFun);