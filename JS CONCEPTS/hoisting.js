//hoisting
// console.log(a)      //undefined
// greet()               //Hello

// var a = 2

// function greet() {
//     console.log('Hello')
//     console.log(a)
// }


// function greet() {
//     var b = 7
//     console.log(b)          //it will print 7
// }

// console.log(a)            //2
// greet()                   //Hello
//=====================================================================================

//temporal-dead-zone
//https://medium.com/@Esakkimuthu/temporal-dead-zone-3dd6d3fbcbda

console.log(a)
greet()

let a = 2
//const a = 2


//In let -> Cannot access 'a' before initialization
//In var-> it gives undefined
//In let or const -> it gives initialization error

function greet() {
    console.log('Hello')
    //console.log(a)
}
// console.log(a)
// greet()