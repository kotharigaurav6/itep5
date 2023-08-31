function Employer(){
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
}
var emp = new Employer(); 

module.exports = emp;
//console.log(module);