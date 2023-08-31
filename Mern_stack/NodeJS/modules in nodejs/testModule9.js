var myObj = require("./module9.js");
console.log(myObj);

/*
    output : 
    {
        id: 101,
        name: 'Andrew Anderson',
        address: { city: 'Indore', state: 'MP', country: 'India' },
        info: [Function: info]
    }
*/
console.log(myObj.obj.info("Employer"));
console.log("Id : "+myObj.obj.id);
console.log("Name : "+myObj.obj.name);
console.log("Address");
console.log(" City : "+myObj.obj.address.city);
console.log(" State : "+myObj.obj.address.state);
console.log(" Country : "+myObj.obj.address.country);

