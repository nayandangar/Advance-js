// 10-01-2024
/*
- find method which not chnage in main array but it return expected output in cureent arry (splice,sort,revers)
- sorting proper not work so how can handle it
- sorting in object of array
- sort give array of object
- total age by use map
- total of all aray ele by use reduce [1,2,43,6,7,8]
- "Hello World Urvish" => "Urvish World Hello"
*/
// --------------------------------------------------------------------------------------

// 1st task in current task

// it return expected output in current arry (splice,sort,revers)
// let arr = ["mango","orange","Banana","Apple",]

// remove banana with splice method in current arr
// let Arrsplice =arr.splice(2,1,"kiwi","watermalon")
// console.log("-------->", arr)

// sort by Abcd in current array
// let Arrsort = arr.sort()
// console.log("-------->", arr)

// reverse
// arr.reverse()
// console.log("-------->", arr)
// --------------------------------------------------------------------------------------

// // - sorting proper not work so how can handle it
// let  array = [4, 2, 5, 1, 3];

// array.sort()
// or
//  array.sort(function(a, b) {
//      return a - b;
//     });
//     console.log(array);

// --------------------------------------------------------------------------------------

// -sorting in Aarray of object
// let Arr2 = [
//   { city: "Mumbai", state_name: "Mahārāshtra" },
//   { city: "Kolkāta", state_name: "West Bengal" },
//   { city: "Bangalore", state_name: "Karnātaka" },
//   { city: "Pune", state_name: "Mahārāshtra" },
//   { city: "Ahmedabad", state_name: "Gujarāt" },
//   { city: "Sūrat", state_name: "Gujarāt" },
//   { city: "Prayagraj", state_name: "Uttar Pradesh" },
//   { city: "Lucknow", state_name: "Uttar Pradesh" },
//   { city: "Cawnpore", state_name: "Uttar Pradesh" },
// ];

// let citykram = Arr2[0].city.sort()
// console.log("-------", Arr2)

//   let sort =Arr2.sort(function(a,b) {
//       return b.city > a.city;
//     });
//     console.log(sort);


// --------------------------------------------------------------------------------------

  //  => total age by use map
// let arr = [2, 3, 4, 5, 1, 2, 3];
// let ansarr = arr.map((g) => g + 5);
// console.log("-----------  ans----------->", ansarr);



// --------------------------------------------------------------------------------------

// total of all aray ele by use reduce [1,2,43,6,7,8]

// let total = [1,2,43,6,7,8]
// let Redu = total.reduce((a,b)=>{
//   return a+b
// })
// console.log("-------- all total", Redu);


// --------------------------------------------------------------------------------------

// - "Hello World Urvish" => "Urvish World Hello"
let name1 =["Hello", "World", "Urvish""]
let newname = name1.split("").reverse().join("");
console.log("-----------  reversename----------->", reversename);


// Array.isArray() returns true if an object is an arry, otherwise false
