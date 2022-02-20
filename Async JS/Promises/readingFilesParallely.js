const fs = require("fs");

let f1p = fs.promises.readFile("f1.txt");

let f2p = fs.promises.readFile("f2.txt");

let f3p = fs.promises.readFile("f3.txt");

//it gives promise pending
// console.log(f1p)
// console.log(f2p)
// console.log(f3p)

//we write function(cb) globally
function cb(data) {
  console.log("File Data -> " + data);
}

f1p.then(cb);

f2p.then(cb);

f3p.then(cb);