// Examples based on callback

function operation(a,b,operator,callback){
    let result;
    switch(operator){
        case 'addition' : result = a+b;
                    break;
        case 'subtraction' : result = a-b;
                    break;
        case 'division' : result = a/b;
                    break;
        default : console.log(`Invalid selection`);
                    break;
    }
    callback(result);
}
function result(res){
    console.log(res);
}
operation(12,23,'addition',result);