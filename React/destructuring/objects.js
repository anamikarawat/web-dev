//Objects -


// let obj = {
//        name : 'Adam',
//        state : 'New York',
//        pincode : 123456
// }

//let{a,b,c}=obj
//console.log(a,b,c)//undefined

// let {state, name : firstName , pincode} = obj
// console.log(name , state , pincode)

// let {state, name , pincode} = obj
// console.log(name , state , pincode)

//Nested Objects - 
let obj = {
    name: "Adam",
    address: {
      country: "USA",
      state: {
        stateName: "New York",
        pincode: 123456,
      },
    },
  };


let {name} = obj
//let {address: {country}} = obj

let {address : {country:cd} , address : {state : {pincode}}} = obj
//let {address : {state : {pincode}}} = obj

let {address : {state : {stateName}}} = obj

console.log(cd)

console.log(pincode)

console.log(stateName)


console.log(name)
