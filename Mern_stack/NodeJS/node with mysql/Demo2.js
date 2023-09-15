// program to take values from user on terminal in node

var readline = require("readline");
var instance = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

instance.question("Enter first number : ",(num1)=>{
        instance.question("Enter second number : ",(num2)=>{
                instance.question("Enter third number : ",(num3)=>{
                    var sum = parseInt(num1)+parseInt(num2)+parseInt(num3);
                    console.log(`Sum :  ${sum}`);
                    instance.close();
                });
        });
});