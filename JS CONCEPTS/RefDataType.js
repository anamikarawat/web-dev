let arr = [1 , 3 , 3]
 console.log(arr, typeof(arr))


let obj = {
  name : 'Annu',
  age : 20
}
console.log(obj, typeof(obj))

// func ke liye object ni de reha hai,
function greet(name) {
  console.log("Hello", name);
}
console.log(greet, typeof(greet))
//==================================================================

let firstPerson = "Hitesh";
let secondPerson = firstPerson; // copy
firstPerson = "Arshad"; // change
console.log(firstPerson, secondPerson); // Arshad Hitesh
//=============================================================

let firstPerson ={
    name : 'Anamika',
    age: 20
}

let secondPerson = firstPerson;
firstPerson.name= 'rawat';

console.log(firstPerson)
console.log(secondPerson)
//memory location me manuplation
