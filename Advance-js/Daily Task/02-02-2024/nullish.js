//  we can use this values  --- null / 0 / false / and undefined
let a = undefined ; 
let b = 150;

// let c = a || b; // => null/0/""/false/undfined  => false
// console.log("=============>", c)

let c =a ?? b; 
//  null / undefined === Khali( if value is not declare than we can't see the result)
console.log("========> c:", c)
