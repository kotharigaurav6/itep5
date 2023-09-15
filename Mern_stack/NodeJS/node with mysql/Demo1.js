// program to take values from user on terminal in node

var readline = require("readline");
var instance = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

instance.question("Enter Name : ",(name)=>{
    console.log(`Welcome ${name}`);
        instance.question("Enter Designation : ",(designation)=>{
            console.log(`Your designation is : ${designation}`);
                instance.question("Your Earning per Year : ",(earning)=>{
                    console.log(`Earning in USD ${earning}`);
                    instance.close();
                });
        });
});