// types in js
// primitive -  number, string, boolean, null, undefined, bigint
// reference  -   []   ()    {}

// aisi koi bhi value jiski copy krne par real copy nhi hota 
//  balki us value ka reference pass ho jata hai
//  use reference value kehte hai, aur jiska copy krne par 
//  real copy ho jaaye wo value primitive type value hoti hai


a = 12  //primitive
a = [12] //reference

b = [12, 13]
c = b

c.pop()
console.log(c)
console.log(b)


