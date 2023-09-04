//  Program showing the concept of events(predefined events)

var event = require("events");
var eventEmitter = new event.EventEmitter();

const dataEventHandler = function(){
    console.log("predefined data event");
}
const endEventHandler = function(){
    console.log("predefined end event");
}
const errorEventHandler = function(){
    console.log("predefined error event");
}
const finishEventHandler = function(){
    console.log("predefined finish event");
}

eventEmitter.on("data",dataEventHandler);
eventEmitter.on("end",endEventHandler);
eventEmitter.on("error",errorEventHandler);
eventEmitter.on("finish",finishEventHandler);

eventEmitter.emit("data"); 
eventEmitter.emit("end"); 
eventEmitter.emit("error"); 
eventEmitter.emit("finish"); 
