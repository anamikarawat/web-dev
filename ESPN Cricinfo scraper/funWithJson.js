const fs = require('fs')
const xlsx = require('xlsx')

// let buffer = fs.readFileSync('./example.json')

// //console.log(buffer)

// let data = JSON.parse(buffer)// This methods is used to covert buffer or any type of  data to json

// //console.log(data)

////data is  a array of object
// data.push({                   //push to insert data
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


////console.log(data)

//let stringData = JSON.stringify(data)  //convert data into string
//console.log(stringData)
////////////////////////////////////////////////////////////////////
//2nd method-jsonFile

let jsonFile = require('./example.json')// requiring JSON File

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
    },
});
// pushing a new object into JSON File
let stringData = JSON.stringify(jsonFile)
// converting json data into string so that we can write it in other files
//======================================================================================

fs.writeFileSync("example.json", stringData)
// writing to json file
console.log('JSON file Updated')
//=========================================================================
//convert/write json data into xlsx sheet
let newWB = xlsx.utils.book_new();
//creating a new workbook

//let newWS = xlsx.utils.json_to_sheet(json);
let newWS = xlsx.utils.json_to_sheet(jsonFile);
//Json is converted to sheet format (rows and column)

//xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
xlsx.utils.book_append_sheet(newWB, newWS, 'Avengers');

//xlsx.writeFile(newWB, fileName);
xlsx.writeFile(newWB, 'abc.xlsx');

//===============================================================================================
//convert xlsx sheet data into Read file in JSON format

//let wb = xlsx.readFile(filePath);
let wb = xlsx.readFile('abc.xlsx');

//let excelData = wb.Sheets[sheetName];
let excelData = wb.Sheets['Avengers'];
let ans = xlsx.utils.sheet_to_json(excelData);
console.log(ans)

