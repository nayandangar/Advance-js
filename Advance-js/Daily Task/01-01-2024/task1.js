// make this formate :
//  Today is Monday ,1,january,2024

function Todaydate (dateType){
    let day = new Date();
    let week = day.getDay();
    let WeekDayname = ["sunday","Monday","Tuesday","Thursday","Friday","Saturday"];
    let mm = day.getMonth();
    let month = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "Nvember", "December"]
    let dd = day.getDate();
    let yyyy = day.getFullYear();
    let date = `${WeekDayname[week]}, ${dd},${month[mm]},${yyyy}`;
    console.log("Today is :", date)


}
let type = "number"
Todaydate(type);



// function gettoday(){
//     let newdate = new Date("2024-01-07") 
//     let WeekDayname = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     let WeekDaysname = WeekDayname[newdate.getDay()]
//      if(WeekDaysname === "sunday"){
//         WeekDaysname = "today is funday"
     
//     }
//     console.log(`${WeekDaysname}`)
//     // console.log(WeekDayname[week],);
//     // console.log("🚀 ~ file: task1.js:23 ~ gettoday ~ week:", week)
//     // console.log("🚀 ~ file: task1.js:22 ~ gettoday ~ newdate:", newdate)
//     // let dayname = `${WeekDayname[week[dayfun]]}`;
    
//     // console.log("🚀 ~ file: task1.js:25 ~ gettoday ~ dayname:", dayname)
// }
// gettoday()



