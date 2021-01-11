const event = require("events");

const eventEmitter = new event.EventEmitter();

const myEventHandler = function() {
  console.log("Executed!");
}

eventEmitter.on('event', myEventHandler);

eventEmitter.emit('event');