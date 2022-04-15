//Array

let arr = ["Hi", "I", "am", "Mrinal"];

// let a = arr[1] // I
// let b = arr[0] // Hi

//Destructuring

//let [a, b, c, d] = arr
//console.log(a, b, c, d);

//let [a, b, , d] = arr  //empty element
//console.log(a, b, d);

//let [a, b, c, d,e] = arr
//console.log(a, b, c, d,e);


let [a, b, c, d, e = "bye"] = arr;

console.log(a, b, c, d, e);

