'use strict'
//browser-> strict mode
console.log(this) // window Object


function f(){
       console.log(this)
}

f()//undefined



let obj = {
       f: function(){
              console.log(this)
       }
}

obj.f()//object itself


let obj = {
       f: function(){
              function g(){
                     console.log(this)
              }
              g()
       }
}

obj.f()// return window object