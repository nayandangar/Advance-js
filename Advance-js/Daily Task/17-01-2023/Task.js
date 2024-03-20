// Tasks
// total population of all city (population in string)
// get city by state name= maharashtra ["mumbai","pune"] =filter
// total population of state
// filter city by substring - like search
// --------------------------------------------




let arr = [
    { population: 1534, city: "Mumbai", state_name: "Mahārāshtra" },
    { population: 123, city: "Kolkāta", state_name: "West Bengal" },
    { population: 129, city: "Bangalore", state_name: "Karnātaka" },
    { population: 1934, city: "Pune", state_name: "Mahārāshtra" },
    { population: 236, city: "Ahmedabad", state_name: "Gujarāt" },
    { population: 756, city: "sūrat", state_name: "Gujarāt" },
    { population: 842, city: "Prayagraj", state_name: "Uttar Pradesh" },
    { population: 954, city: "Lucknow", state_name: "Uttar Pradesh" },
    { population: 3999, city: "Cawnpore", state_name: "Uttar Pradesh" },
  ];


//   dynamic checking for length


// function findByLength(x){

//     let data = arr.filter((e)=> e.city.length>x)
//     return data 
// } 

// let moreThen7 = findByLength(7)
// console.log("🚀 ~ moreThen6:", moreThen7)



// -----------------------------------------------------

// Total Population of all city

// let sum = 0;
// let map = arr.map((e) => {
//   sum += e.population;
//   return sum;
// });
// console.log(sum);


// -----------------------------------------------------
// Total Population of state
// function StatePop(i) {
//   let Statesum = 0;
//   let Filter = arr.filter((e) => {
//     return e.state_name === i;
//   });
//   let Map1 = Filter.map((e)=>{
//     Statesum += e.population
//   })
//   let citiesInState = arr.filter((e) => e.state_name === i)
//   let map2 =  citiesInState.map((e)=>e.city ) 
//   console.log(i,"--- cities are--->", map2,"total population is ->",Statesum)
// }
// StatePop("Mahārāshtra")
// --------------------------------------------


// ---------------------------------------------

// get city by state name ["mumbai","pune"]

// function stateName(x){
  
//   let citiesInState = arr.filter((e) => e.state_name === x)
//   let map =  citiesInState.map((e)=>e.city) 
// console.log(map);
// }

// stateName("Mahārāshtra");


// ------------------------------------------------------------------------
// filter city by substring - like search

// let SearchCity = arr.filter((e)=>e.city.includes("aa"))
// console.log("🚀 ~ SearchCity:", SearchCity);




