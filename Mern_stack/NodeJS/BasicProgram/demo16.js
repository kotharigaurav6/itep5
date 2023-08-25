var c;
var getSum = (a,b)=>{
    return new Promise((resolve,reject)=>{
        c = a+b;
        if(c>5)
            resolve("Here sum is greater than 5");
        else
            reject("Here sum is less than or equals to 5");
    });
}
getSum(100,200).then(msg=>{
    c = c+10;
    console.log(msg);
    return c;
}).then(value=>{
    console.log("New Value : "+value);
}).catch(err=>{
    console.log(err);
});