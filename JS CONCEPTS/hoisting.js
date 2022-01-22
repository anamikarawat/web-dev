//hoisting
console.log(a)      //undefined
greet()               //Hello

var a = 2

function greet() {
    console.log('Hello')
}

// console.log(a)            //2
// greet()                   //Hello
//=====================================================================================

//temporal-dead-zone
//https://medium.com/@Esakkimuthu/temporal-dead-zone-3dd6d3fbcbda
