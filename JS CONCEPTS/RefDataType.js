let arr = [1 , 3 , 3]
 console.log(arr, typeof(arr))


let obj = {
  name : 'Annu',
  age : 20
}
console.log(obj, typeof(obj))

// func ke liye object ni de reha hai,
function greet() {
  console.log("Hello");
}
console.log(greet, typeof(greet))


//==================================================================

// let firstPerson = "Hitesh";
// let secondPerson = firstPerson; // copy
// firstPerson = "Arshad"; // change
// console.log(firstPerson, secondPerson); // Arshad Hitesh
//=============================================================

let firstPerson ={
    name : 'Anamika',
    age: 20
}
let secondPerson = firstPerson;
// console.log(firstPerson)    //Anamika
// console.log(secondPerson)  //Anamika

firstPerson.name= 'rawat';
//secondPerson.name = 'RAWAT';


console.log(firstPerson) //rawat
console.log(secondPerson)  //rawat
//memory location me manuplation
