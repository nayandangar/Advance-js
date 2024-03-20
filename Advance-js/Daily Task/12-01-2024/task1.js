// ---------------------------------------------------------------------------------------
//  make this array of object to Uppercase

// let person = [
//     { name: "urvish", age: 23 },
//     { name: "nayan", age: 25 },
//     { name: "dharmin", age: 20 },
//     { name: "sid", age: 22 },
//     { name: "rajni", age: 29 },
//   ];

//   let upperarr =  person.map(obj =>({
//     name:obj.name.toUpperCase(),age:obj.age
//   }))
//   console.log("---Uppercase---", upperarr);

// ---------------------------------------------------------------------------------------
// 10-01-2024( baki task)
// - with method which not chnage in main array but it return expected output in new array (splice,sort,revers) // TODO ;

// - "Hello World Urvish" => "Urvish World Hello" // TODO

// let oldarr = "hello World Urvish";
// let newarr = oldarr.split(" ")
// let reversarr = newarr.reverse()
// let joinsentence = reversarr.join(" ")
// console.log("------reverse Array------>", joinsentence);

// -------------------------------------------------------------------------

//   Task date 12-01-2024
//

// find all city witch have more then 6 char = find
let arr = [
  { population: "1234", city: "Mumbai", state_name: "Mahārāshtra" },
  { population: "123", city: "Kolkāta", state_name: "West Bengal" },
  { population: "12", city: "Bangalore", state_name: "Karnātaka" },
  { population: "1234", city: "Pune", state_name: "Mahārāshtra" },
  { population: "1", city: "Ahmedabad", state_name: "Gujarāt" },
  { population: "234", city: "sūrat", state_name: "Gujarāt" },
  { population: "1", city: "Prayagraj", state_name: "Uttar Pradesh" },
  { population: "34", city: "Lucknow", state_name: "Uttar Pradesh" },
  { population: "3999", city: "Cawnpore", state_name: "Uttar Pradesh" },
];

// find only one city which have only 6 char
// let findcity1 = arr.find((e)=>e.city.length>6)
// console.log("🚀 ~ findcity1:", findcity1)

// ----------------------------------------------------
// find All city which have more than 6 char

// let findcity2 = arr.filter((e) => e.city.length > 6);
// let sort = arr.sort(function (a, b) {
//   return a.city.length - b.city.length;
// });
// // let map =sort.map((e)=> e.city)
// // let filter =map.filter((e)=> e.length >= 6)
// console.log("🚀 ~ filter:", findcity2);
// console.log("🚀 ~ filter:", filter)
// console.log("🚀 ~ Maparr:", Maparr)
// console.log("🚀 ~ sort:", sort)
// console.log("🚀 ~ sort:", sort)
// console.log("🚀 ~ Maparr:", Maparr)

// ------------------------------------------------
// total age
// let person = [
//   { name: "uv", age: 23 },
//   { name: "nayan", age: 25 },
//   { name: "dharmin", age: 20 },
//   { name: "sid", age: 22 },
//   { name: "rajni", age: 29 },
// ];
// let sum = 0;
// let map = person.map((e) => {
//   sum += e.age;
//   return sum;
// });
// console.log(sum);

// ------------------------------------------------
// Average age 

// let person = [
//   { name: "uv", age: 23 },
//   { name: "nayan", age: 25 },
//   { name: "dharmin", age: 20 },
//   { name: "sid", age: 22 },
//   { name: "rajni", age: 29 },
// ];

let sum = 0;
 let map = person.map((e) => {
   sum += e.age;
  return sum;
 });

let average = sum / person.length;

console.log(average);

