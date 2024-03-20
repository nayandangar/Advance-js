let a = 2200
// console.log("log-----1=>" , a)
let b =a / 4
// console.log("log-----2=> ", b)
a=2400
// console.log("log-----3=> :", a)

let obj1 = {a:20,b:200,c:2000}
let obj3 ={D:2500,E:3000,F:3500}
let obj2 = {...obj1,...obj3,G:4000}
// console.log("consol obj 2----->", obj2)]


// Deep copy by json
let jsData = JSON.stringify(obj2)
let jsData2 = JSON.parse(jsData)
// console.log(" -----~ jsData:", jsData2)
