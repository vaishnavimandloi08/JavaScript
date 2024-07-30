// how to copy reference values
// array
var a = [1,2,3,4,5,6]
var b = [...a]      //spread operator

b.pop()
console.log(b)
console.log(a)



// object
var obj = {name : "aayush"}

var obj1 = {...obj}


obj1.name = "aayushi"
console.log(obj1)
console.log(obj)