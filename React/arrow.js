// write a function to add two numbers and print their sum (function Expression)
// let add =function(a , b){
//       console.log(a+b)
// }
// add(3 , 4)

//arrow function= fat arrow function

// let add =(a , b)=>{
//       console.log(a+b)
// }
// add(3 , 4)

//************************************** */

// let regularFunction = function(){
//   console.log('I am a regular function')
// }

// let arrowFunction= () =>{
//   console.log('I am an arrow function')
// }
// regularFunction()
// arrowFunction()
//************************************************** */
// let regularFunction = function(name){
//   console.log('I am  ${name} ')
// }

// let arrowFunction = (name) => {
//   console.log('I am ${name}')
// }
// //let arrowFunction = (name) => console.log('I am ${name}')
// //let arrowFunction = name => console.log('I am ${name}')

// regularFunction('Anamika')

// arrowFunction('Rawat')

//******************************************************* */
// var regularFunction = function(name){
//        console.log(`I am ${name}`)
// }

// let arrowFunction = name => console.log(`I am ${name}`)

// regularFunction('Adam')

// arrowFunction('Steve')

//let add=() => 'JAVASCRIPT'
//console.log(add())
//************************************************************ */
//function test1(){
//   console.log(this)//global object
// }

// let test = () => {
//   console.log(this); // {}empty object
// };
// test();
//************************************************** */
let person = {
  name: "Adam",
  age: 27,

  showDetails: function () {
    console.log(this.name + " " + this.age);

    // let arrow= () => {
    //   console.log(this.name + " " + this.age);
    // }
    // arrow()
  },

  arrow: () => {
    console.log(this.name + " " + this.age);
  },

};

person.showDetails();
person.arrow()//arrow function not bind this