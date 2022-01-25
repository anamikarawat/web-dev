//Callback function - any function that is passed as an argument to another function .
function printFirstName(firstName, cid, cid2){
    console.log(firstName)
    cid('Rawat')
    cid2('20')

}
function printLastName(lastName){
    console.log(lastName)

}
function printAge(age){
    console.log(age)

}
printFirstName('Anamika', printLastName,printAge)
// printLastName('Rawat')

//cid hamara parameter h , printLastName hamara argument h


















