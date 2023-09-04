//  Program showing the concept of events (custom event)

var event = require("events");
var eventEmitter = new event.EventEmitter();
//console.log(eventEmitter);

const myEventHandler = function(){
    console.log("Here this is a listener for custom event");
}
eventEmitter.on("customEvent",myEventHandler);
eventEmitter.on("customEvent",myEventHandler);
eventEmitter.on("customEvent",myEventHandler);
eventEmitter.on("customEvent",myEventHandler);
eventEmitter.on("customEvent",myEventHandler);

eventEmitter.emit("customEvent"); // here customEvent is my custom event
