const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor!');
  setTimeout(() => {                                  //setTimeout() does not stop the execution of code infact it resumes the code until it's time is reached
      console.log('Please turn off the motor! Its a gentle reminder');
  }, 3000);
});

console.log("The script is running")
myEmitter.emit('WaterFull');
console.log("The script is still running")
myEmitter.emit('WaterFull');