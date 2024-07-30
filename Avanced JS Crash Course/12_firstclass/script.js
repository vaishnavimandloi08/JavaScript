// what is first class function

// js mein ak concept hai jiska mtlb hota hai
//  ki aap function ko as a value use kr skte

var a = function(){}



function abc(a){
    a()
}

abc(function(){console.log("hello")})

