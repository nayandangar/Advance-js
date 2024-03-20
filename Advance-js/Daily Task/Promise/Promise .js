let Willcome = new Promise((resolve,reject)=>{
    resolve("I am arrived here....  ")
    // reject(" so I am not  arrived there....  ")
})
// Willcome.then((response)=>{
//     console.log(" response--->",response);
// }).catch((error)=>{
//     console.log(" Error--->" ,error);
    
// })


let PendingPromise = new Promise((resolve,reject)=>{
    resolve("this promise is pending Now..")
    // reject("this is rejected... ")
})

// let msg = PendingPromise;
// console.log("---------response----->",msg)


// Promise chaining`
PendingPromise
.then((response)=>{
    console.log("respons-1----->",response);
    return "Test Response";
})
.then((res2)=>{
    console.log("respons------>",res2);
    return "Test Response 2";
})
.then((res3)=>{
    console.log("respons------>",res3);
    return "Test Response 3";
})
.catch((error)=>{
    console.log("error---->",error);
})