//cp= child process is a node module used to create sub process within a script
//you can do different task with your script
const cp = require("child_process");

console.log("Tring to open calculator");
cp.execSync("calc");
console.log("Calculator Opened");


 console.log("Open Vs code");
 cp.execSync("code");


 console.log("Open nados in chrome");
 cp.execSync('start chrome https://nados.io/feed');


 let output = cp.execSync("node test.js")
 console.log("output->" + output)

console.log("output" + cp.execSync('node test.js'))    //give command -> node cp.js in integrated terminal 