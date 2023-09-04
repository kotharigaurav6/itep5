//  Program showing the concept of events

//var EventEmitter = require("events");
import EventEmitter from 'events';
class MyEmitter extends EventEmitter{}

var eventEmitter = new MyEmitter();
eventEmitter.on("myEvent",()=>{
    console.log("custom event");
});
eventEmitter.emit("myEvent");