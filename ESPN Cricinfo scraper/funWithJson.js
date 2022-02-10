const fs = require('fs')

let buffer = fs.readFileSync('./example.json')

//console.log(buffer)

let data = JSON.parse(buffer)
console.log(data)




















