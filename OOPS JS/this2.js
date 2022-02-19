// Node  + strict

'use strict'


//global -

console.log(this) //- empty obj

//inside a function
function f(){
       console.log(this)
}

f()//undefined

//function inside object
let obj = {
       name : 'Rahul',

       f: function(){
              console.log(this)
       }
}

obj.f()//return obj itself


//obj-function-function
let obj2 = {
       name :'Mrinal',

       f: function f(){
              function g(){
                     console.log(this)
              }

              g();
       }
}


obj2.f()//return undefined