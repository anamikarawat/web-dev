let arr = [2, 5, 9, 8, 6, 4, 3];

//Map function

// function squarer(v){
//     return v*v;
// }
// let square = squarer(2)
// console.log(square)
let sqarr = arr.map(function squarer(v) {
    return v * v;

})
console.log(sqarr)