//  Program showing the concept of events (custom event)

var event = require("events");
var eventEmitter = new event.EventEmitter();
//console.log(eventEmitter);

const myEventHandler1 = function(){
    console.log("Here this is a listener1 for custom event");
}
const myEventHandler2 = function(){
    console.log("Here this is a listener2 for custom event");
}

eventEmitter.on("customEvent",myEventHandler1);
eventEmitter.on("customEvent",myEventHandler2);
eventEmitter.emit("customEvent"); // here customEvent is my custom event

var array_Listeners = eventEmitter.listeners("customEvent");
console.log(array_Listeners);
console.log("No. of listeners : "+array_Listeners.length);
