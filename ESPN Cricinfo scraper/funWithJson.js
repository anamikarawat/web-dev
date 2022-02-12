const fs = require('fs')
const xlsx = require('xlsx')

// let buffer = fs.readFileSync('./example.json')

// //console.log(buffer)

// let data = JSON.parse(buffer)

// data.push({
//     "name": "Thor",
//     "last name": "odinson",
//     "isAvenger": true,
//     "friends": [
//         "Tony",
//         "Steve",
//         "Bruce"
//     ],
//     "age": 20,
//     "address": {
//         "city": "Delhi",
//         "state": "New Delhi"
//     }
// })


//console.log(data)

//let stringData = JSON.stringify(data)
//console.log(stringData)
////////////////////////////////////////////////////////////////////
//2nd method

let jsonFile = require('./example.json')

jsonFile.push({
    "name": "Thor",
    "last name": "odinson",
    "isAvenger": true,
    "friends": [
        "Tony",
        "Steve",
        "Bruce"
    ],
    "age": 20,
    "address": {
        "city": "Delhi",
        "state": "New Delhi"
    }
})





let stringData = JSON.stringify(jsonFile)



fs.writeFileSync("example.json", stringData)
// writing to json file
console.log('JSON file Updated')



let newWB = xlsx.utils.book_new();
//creating a new workbook

let newWS = xlsx.utils.json_to_sheet(jsonFile);
//Json is converted to sheet format (rows and column)

//xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
xlsx.utils.book_append_sheet(newWB, newWS, 'Avengers');

//xlsx.writeFile(newWB, fileName);
xlsx.writeFile(newWB, 'abc.xlsx');

//===============================================================================================

//let wb = xlsx.readFile(filePath);
let wb = xlsx.readFile('abc.xlsx');

//let excelData = wb.Sheets[sheetName];
let excelData = wb.Sheets['Avengers'];
let ans = xlsx.utils.sheet_to_json(excelData);
console.log(ans)

