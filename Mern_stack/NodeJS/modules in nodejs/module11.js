
module.exports.myFun = new function Employer(){
    this.id = 101,
    this.name = "Andrew Anderson",
    this.address = {
        city : "Indore",
        state : "MP",
        country : "India"
    },
    this.info = (message)=>{
        return "Welcome "+message;
    }
};

console.log(module);