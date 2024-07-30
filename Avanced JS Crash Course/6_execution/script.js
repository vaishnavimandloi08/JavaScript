// execution context
// execution context means jb bhi function chlayenge 
// function upna khud ka imaginary container bna lega
// jisme uski 3 chize hogi:
// 1) variables
// 2)function inside that parent function
// 3)lexical enviroment of that function

// y jo imaginary container hai use hi hum  execution context kehte hai

abcd()

                //   EC       imaginary context
            //  ______________
            // |  var         |
            // |        func  |
            // |    LE        |
            // |              |
            // |______________|

// execution context is a container where the function 's code is executed
//  its is always created whenever a function is called execution context 

// it contains 3 things
// variable
// function inside that parent function
// lexical enviroment of that function

function abc(){
    var a = 12;
    function def(){
        var b = 14;
    }
}


            //  ______________
            // |  a           |
            // |        def   |
            // |    LE        |
            // |              |
            // |______________|