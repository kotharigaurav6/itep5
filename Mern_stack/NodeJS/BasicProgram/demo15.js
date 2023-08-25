var getSum = (a,b)=>{
    return new Promise((resolve,reject)=>{
        var c = a+b;
        if(c>5)
            resolve("Here sum is greater than 5");
        else
            reject("Here sum is less than or equals to 5");
    });
}
getSum(1,2).then(msg=>{
    console.log(msg);
}).catch(err=>{
    console.log(err);
});