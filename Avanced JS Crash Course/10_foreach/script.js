// foreach
// foreach loop mainly array mein use hota hai
// foreach array mein changes nhi krta array ki tempoerory copy mein change krta hai
// jiske karn hmesha array same rhta hai

var a = [12,34,56,78,90,9,87,6,5,3,23,45,6]

a.forEach(function(val){
    console.log(val+2)
})

console.log(a)


// for in
// objects pr loop krne k liye use hota hai for in
var obj={
    name:"harsh",
    city:"bhopal",
    age:24
}
for (var key in obj) {
    console.log(key,obj[key])
}



// do while
var i = 0
do{
    console.log(i)
    i++
}while(i<=10)
