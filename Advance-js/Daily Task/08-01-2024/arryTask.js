/*
// 08-01-2024
-let nameArr = ["uv","nayan","rajni","sid"]
add "manoj" in end
add "ashok" in start
remove uv
remove sid and rajni
remove nayan
add "sanju" after rajni
replace nayan and rajni with NAYAN and RAJNI
join ["hari","ram"] with our array
want sub array of ["rajni","sid"] 
*/



let nameArr = ["urvish","nayan","rajni","sid","arjun"]
// for add in last => Push() 
// nameArr.push("manoj");
// console.log("--------Arr Method--->:", nameArr)

// for add in Start => Unshift() 
// nameArr.unshift("ashok");
// console.log("--------Arr Method--->:", nameArr)

//  remove urvish
// nameArr.splice(0,1);
// console.log("--Remove uv---------", nameArr)

//   remove sid and rajni
// nameArr.splice(2,2);
// console.log("-- remove sid and rajni---------", nameArr)

// remove nayan
// nameArr.splice(1,1);
// console.log("--remove nayan---------", nameArr)


// add "sanju" after rajni
// nameArr.splice(3,0,"sanju");
// console.log("-----------", nameArr)

// replace nayan and rajni with NAYAN and RAJNI
// nameArr.splice(1,2,"NAYAN","RAJNI");
// console.log("--------Arr Method---->:", nameArr)




// join ["hari","ram"] with our array
// nameArr.push("hari","ram")
// console.log("----join-------", nameArr)

//  sub array of ["rajni","sid"] 
// let subarr = nameArr.slice(2,4)
// console.log("----Sub Array-------",nameArr.concat (subarr))