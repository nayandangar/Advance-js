// task
// 05-02-2024

// make in to array
// function print([ name, age ], id) {
//     console.log("-----------  id----------->", id);
//     console.log("my name is ", name);
//     console.log("my age is ", age);
//   }

//   print([{ name: "Nayan Dangar", age: 25} ], 1000)

// make in to object 
//   ----------------------
function dataReturn() {
    return {x:10,y:20,z:30};
  }
  
  let {x, y,z} = dataReturn();
  console.log("-----------  x----------->", x)
  console.log("-----------  y----------->", y)
  console.log("-----------  z----------->", z)
  