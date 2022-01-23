//Execution Context-The environment where JS code is Executed and evaluated
//Global Execution Context- by default JS gives us execution context which is known as GEC in which the whole code will reside


var a =2
var b =3

function add(m,n){
    var sum = m+n
    return sum
}

var sum1 = add(1,2);
var sum2 = add(a,b);

console.log(sum1);
console.log(sum2);

////==========================================================
var n=2
function square(n){
    var square = n*n
    return square
}

var square1 = square(n);
var square2 = square(6);

console.log(square1);
console.log(square2);

//website-https://medium.com/innovation-incubator/javascript-execution-context-c5d807d206f5
// execution context in js
// first the global execution context is created
// then the function is executed
// then the local execution context is created
// then the local execution context is destroyed
// then the global execution context is destroyed









