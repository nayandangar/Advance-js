 let Obj1 = {name:"Nayan",
    age:25,
 
};
 let jsonData =JSON.stringify(Obj1);
 console.log("------------------->", jsonData);
//  json data whitch use for string the data
// json can store a data and all data in double corts("")


 let NormalData =JSON.parse(jsonData);
 console.log("======= NormalData=====>", NormalData);

 