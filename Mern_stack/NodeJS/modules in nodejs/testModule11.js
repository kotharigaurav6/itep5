var myObj = require("./module11.js");
console.log(myObj);

/*
    output : 
    myFun : Employer {
        id: 101,
        name: 'Andrew Anderson',
        address: { city: 'Indore', state: 'MP', country: 'India' },
        info: [Function (anonymous)]
    }
*/
console.log(myObj.myFun.info("Employer"));
console.log("Id : "+myObj.myFun.id);
console.log("Name : "+myObj.myFun.name);
console.log("Address");
console.log(" City : "+myObj.myFun.address.city);
console.log(" State : "+myObj.myFun.address.state);
console.log(" Country : "+myObj.myFun.address.country);

