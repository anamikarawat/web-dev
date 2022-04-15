//https://www.programiz.com/javascript/spread-operator

// let arr = [ 1 , 2, 3, 4] 


// let arr2 = [arr]

// arr.push(5)

// console.log(arr) // [1 , 2, 3, 4 , 5]
// console.log(arr2) // [1 , 2, 3, 4 , 5]


//***********************************************************/


//let arr = [ [1 , 2, 3, 4] , [16 , 7 ,8] ]
let arr = [1,2,3,4,5]

let arr2 = [...arr]


arr[2] = 23

arr2[2] = 47


console.log(arr) // [1 , 2, 23, 4 , 5]
console.log(arr2)// [1 , 2, 47, 4 , 5]