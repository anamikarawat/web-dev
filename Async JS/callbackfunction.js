//Callback function - any function that is passed as an argument to another function .
// function printFirstName(firstName, cid, cid2){
//     console.log(firstName)
//     cid('Rawat')
//     cid2('20')

// }
// function printLastName(lastName){
//     console.log(lastName)

// }
// function printAge(age){
//     console.log(age)

// }
// printFirstName('Anamika', printLastName,printAge)

//// printLastName('Rawat')

//cid hamara parameter h , printLastName hamara argument h

//=======================================================================================
//Syncronas and Asyncronus 

////Sync way of reading file
const fs = require("fs");

// console.log("before")

// let data = fs.readFileSync("f1.txt")

// console.log("" + data)

// console.log("after")


////Async way of reading a file

console.log("before")

fs.readFile("f1.txt" , cb)
fs.readFile("f2.txt" , cb2)

function cb(err , data){
   //error first callbacks
   if(err){
       console.log(err)
   } 
   else{
   console.log("" + data)
   }
}
function cb2(err , data){
    //error first callbacks
    if(err){
        console.log(err)
    } 
    else{
    console.log("" + data)
    }
 }
console.log("after")






