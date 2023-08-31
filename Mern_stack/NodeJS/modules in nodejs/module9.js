var myObj = {
    id : 101,
    name : "Andrew Anderson",
    address : {
        city : "Indore",
        state : "MP",
        country : "India"
    },
    info : (message)=>{
        return "Welcome "+message;
    }
}

module.exports.obj = myObj;