// let var const
// Javascript is mainly 2 version
// ES5    -    Old version      -    var
// ES6    -    New Version      -    let , const
// ES5 mein ES6 add on hua hai 



// var ES5 main tha
// var function scoped hota hai 
// var upne parent function mein khi bhi access ho skta hai
// var adds itself to the window object


// let, const ES6 main hai
// let, const braces scoped hota hai
// let, const braces main hi access hoga
// let, const doesn't adds window object


var a = 12;
var b = 14;

console.log(a+b)

var a = 34;


function abc(){
    for(var i = 0; i<12; i++)
    {
        console.log(i)
    }
    console.log(i)    // var function scope
}
abc()







let a = 50;
let b = 89;
let a = 78;
console.log(a+b)


function abc(){
    for(let i = 0; i<12; i++)
    {
        console.log(i)
    }
    console.log(i)    // let braces scope
}
abc()






// constant
const pi = 3.14