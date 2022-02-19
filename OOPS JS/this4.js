//browser->non strict mode

console.log(this) // window Object

//inside a function
function f(){
       console.log(this)
}

f()//return window obj


//function inside object
let obj = {
       f: function(){
              console.log(this)
       }
}

obj.f()//object itself

//function-function inside object
let obj = {
       f: function(){
              function g(){
                     console.log(this)
              }
              g()
       }
}

obj.f()//window object