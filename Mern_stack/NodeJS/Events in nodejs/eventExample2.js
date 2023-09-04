//  Program showing the concept of events (custom event)

var event = require("events");
var eventEmitter = new event.EventEmitter();
//console.log(eventEmitter);

eventEmitter.on("customEvent",function(){
    console.log("Here this is a listener for custom event");
});

/*
function(){
    console.log("Here this is a listener for custom event");
}
the above function is a listener or event handler function
*/
eventEmitter.emit("customEvent"); // here customEvent is my custom event