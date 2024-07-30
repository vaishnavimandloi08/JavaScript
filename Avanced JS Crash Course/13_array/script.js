// how arrays are made behind the scenes
var a = [1,2,3,4]

a[-1] = 2
console.log(a)

Array.isArray([]) = true
Array.isArray({}) = false
// it is not a array it is a object