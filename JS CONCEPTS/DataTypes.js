let a ='Hello'
console.log(a, typeof(a))


let b = 2.5
console.log(b, typeof(b))


let c = true
console.log(c, typeof(c))


let d = undefined
console.log(d, typeof(d))


let e = null
console.log(e, typeof(e))
//missing out data type --> null( type = object )
// jab hum server se koi data lenge na to wo koi na koi object me server client ko dega but it may possible server can give null and that's why model in js w.... tabhi null as object dikhata hai


//=======================================================

//about stack memory in primitive data types 

let firstPerson = 'Anamika'
let secondPerson = firstPerson

// console.log(firstPerson)//Anamika
// console.log(secondPerson)//Anamika

firstPerson = 'Rawat'
console.log(firstPerson)//Rawat
console.log(secondPerson)//Anamika