// function printFirstName(firstName){
//     console.log(firstName)
// }
// function printLastName(LastName){
//     console.log(LastName)
// }
// printFirstName("Anamika")
// printLastName("Rawat")



function printName(firstName, cb) {//cb is a function
    console.log(firstName)
    cb('Yadav')

}
function printLastName(LastName) {
    console.log(LastName)
}

printName('Shashikant', printLastName)

