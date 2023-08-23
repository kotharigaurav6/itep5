// Examples based on prototypes

function Vehicle(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}
Vehicle.prototype.details = function(){
    console.log(`Its ${this.make} ${this.model} of year ${this.year}`);
}

const obj = new Vehicle("Toyota","Innova",2012);
obj.details();