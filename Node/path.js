const path = require('path')

let ext = path.extname('C:\\Users\\hp\\Desktop\\WEB DEV\\Node\\f1.txt')
//this extname method gets the extension name of the file

console.log('Extension Name->'+ ext)

let basename = path.basename('C:\\Users\\hp\\Desktop\\WEB DEV\\Node\\f1.txt')
console.log('BaseName->'+ basename)


console.log(__dirname)//gets you the path of current directory of the file
console.log(__filename) // gets you the path of the file you are in

//output
// Extension Name->.txt
// BaseName->f1.txt
// C:\Users\hp\Desktop\WEB DEV\Node
// C:\Users\hp\Desktop\WEB DEV\Node\path.js