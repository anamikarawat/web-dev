//Callback function - any function that is passed as an argument to another function .
function printFirstName(firstName, cid, cid2){
    //cid & cid2 are 2 parameters
    console.log(firstName)
    cid('Rawat')//cid is there CALL BACK
    cid2('20')

}
function printLastName(lastName){
    console.log(lastName)

}
function printAge(age){
    console.log(age)

}
printFirstName('Anamika', printLastName,printAge) //printLastName & printAge - we pass 2 arguments

//// printLastName('Rawat')

//cid hamara parameter h , printLastName hamara argument h

//=======================================================================================
//Syncronas and Asyncronus 

////Sync way of reading file-> run a code line by line
const fs = require("fs");

console.log("before")

let data = fs.readFileSync("f1.txt")
//readFileSync->used for sync way

console.log("" + data)

console.log("after")


////Async way of reading a file-> To execute a big file or data in last

console.log("before")

fs.readFile("f1.txt" , cb)//this callback(cb) function will execute in last.
fs.readFile("f2.txt" , cb2)
//readFile ->used for async way and it is async function

function cb(err , data){
    //agar file read nhi hui toh error ayega verna data ayega
   //error first callbacks- those callbacks in which first we deal with the errors
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
