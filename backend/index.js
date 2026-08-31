import {EventEmitter} from "node:events";
const task = new EventEmitter();

// register item
task.on("greet",(name)=>{
    console.log(`hello,${name}! welcome to the session.`)
});
task.on("exit",(reason)=>{
    console.log(`session ending.Reason:${reason}`);
});
task.on("greet",()=>{
    console.log(`class started by bhavishya yadav`);
});


//emit (trigger) event
task.emit("greet","student");
task.emit("exit","session completed");
