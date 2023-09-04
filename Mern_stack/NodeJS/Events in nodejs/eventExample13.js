//  Program showing the concept of events

var event = require("events");
var eventEmitter = new event.EventEmitter();
//console.log(eventEmitter);

const myEventHandler = function(a,b){
    console.log("Sum : "+(a+b));
}
const myEventHandler1 = function(msg){
    console.log(msg);
}

eventEmitter.on("customEvent1",myEventHandler1);
eventEmitter.on("customEvent",myEventHandler);

eventEmitter.emit("customEvent1","Here we are going to perform addition operation"); // here customEvent is my custom event
eventEmitter.emit("customEvent",200,300); // here customEvent is my custom event