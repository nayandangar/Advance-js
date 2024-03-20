//  using  spred oprator----- ...spred
// object spred

let obj1 ={
    name:"Nayan",
    age : 25,
}

let obj2 = {...obj1,area:"Katargam",city:"surat"}
let obj3 ={Email:"nayandangar1@gmail.com",Mo:8460491069}
let obj4 = {...obj1,...obj2,...obj3}
// console.log("spred op----->:", obj4)
 
// Array spred....
let A = [10,20,30,40]
let B =[50,60,70,80]
let C = [...A,...B,90,100]
// console.log("--------spred in arr----->", C)


let total =Math.max(...B)
let total2 =Math.min(...A)
// console.log("------total---->:", total)
// console.log("-----total2----->", total2)
