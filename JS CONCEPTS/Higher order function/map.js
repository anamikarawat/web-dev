// Higher order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them.
// In simple words,
// A Higher-Order function is a function that receives a function as an argument
// or returns the function as output.

let arr = [2, 5, 9, 8, 6, 4, 3];
function squarer(v){
    return v*v;
}
let square = squarer(2)
console.log(square)

//Map function- map is itself a function,it is a higher order function
// map takes a callback function as an argument,
// map will call the callback functions as many times as the elements in the array
// map will process every value and will apply the instruction that inside the callback function
//map returns a new array.

let arr = [2, 5, 9, 8, 6, 4, 3];
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
//===============================================================

let nameArr = ['Vishal Kumar', 'Vaibahv Rawal', 'Anmol Taneja']

// You have to use map function and you will take out firstName and lastName separately
let modifiedArray = nameArr.map(function (n) {
    let partOfString = n.split(' ');
    //let firstName........... 
    //let lastName..........
    return partOfString
})
console.log(modifiedArray)

//========================================================================
 const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
 const inrtToUsd = 74;
let transArray = transactions.map(function (n) {
    return (n * inrtToUsd)
})
console.log(transactions)
console.log(transArray)

//divide
let transArray = transactions.map(function (n) {
    return (n / inrtToUsd).toFixed(2)
})
console.log(transactions)
console.log(transArray)


