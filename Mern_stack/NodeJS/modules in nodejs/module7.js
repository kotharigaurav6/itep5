// var myfun1 = ()=>{
// //    console.log("Hello , ");
//     process.stdout.write("Hello , ");
// }
// var myfun2 = (name)=>{
//     process.stdout.write(name);
// }
// module.exports = {a : myfun1,b : myfun2};

// console.log(module);

var myfun1 = ()=>{
    //    console.log("Hello , ");
        process.stdout.write("Hello , ");
    }
    var myfun2 = (name)=>{
        process.stdout.write(name);
    }
    module.exports = {myfun1,myfun2};
    
    console.log(module);