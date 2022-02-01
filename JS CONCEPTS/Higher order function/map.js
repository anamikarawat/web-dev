// Higher order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them.
// In simple words,
// A Higher-Order function is a function that receives a function as an argument
// or returns the function as output.

let arr = [2, 5, 9, 8, 6, 4, 3];
// function squarer(v){
//     return v*v;
// }
// let square = squarer(2)
// console.log(square)

//Map function- map is itself a function,it is a higher order function
// map takes a callback function as an argument,
// map will call the callback functions as many times as the elements in the array
// map will process every value and will apply the instruction that inside the callback function
//map returns a new array.
let sqarr = arr.map(function squarer(v) {
    return v * v;

})
console.log(sqarr)
console.log(arr)
//====================================================================================

let nameArr =  ["anamika" , "rawat", "annu"];
let  nameArr2 =nameArr.map(function (v) {
    return v ;

})
console.log(nameArr2);

