// named export
// var message = ()=>{
//     console.log("Addition Operation");
// }
// var addition = (a,b)=>{
//     console.log("Sum : "+(a+b));
// }
// export {message,addition}; 


var message = ()=>{
    console.log("Addition Operation");
}
var addition = (a,b)=>{
    console.log("Sum : "+(a+b));
}
export const myfun = {message,addition}; 
