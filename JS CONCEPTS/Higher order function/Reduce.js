
// * Reduces all the elments in an array into a single value.

const arr = [2, 3, 4, 5, 6]

let addition = arr.reduce(function(sum, value){

    let updatedSum = sum+value
    return updatedSum
},0)
//=============================================================
console.log(addition)

let addition = arr.reduce(function(sum, value){  //sum -> accumulator,initially its value is 0 then its value updated after that

     sum = sum+value
    return sum
},0)

console.log(addition)
//=========================================================
let product = arr.reduce(function(multiply, value){

    let updatedProduct = multiply*value
    return updatedProduct
},1)

console.log(product)
                
