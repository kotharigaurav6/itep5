var myObj = require("./module10.js");
console.log(myObj);

/*
    output : 
    Employer {
        id: 101,
        name: 'Andrew Anderson',
        address: { city: 'Indore', state: 'MP', country: 'India' },
        info: [Function (anonymous)]
    }
*/
console.log(myObj.info("Employer"));
console.log("Id : "+myObj.id);
console.log("Name : "+myObj.name);
console.log("Address");
console.log(" City : "+myObj.address.city);
console.log(" State : "+myObj.address.state);
console.log(" Country : "+myObj.address.country);

