// how many days between to date 



    let date1 = new Date("12-30-2023");
    let date2 = new Date("12-30-2024");
    
    let Diffrence_time =date2.getTime()-date1.getTime();
    let Diffrence_days =Math.round(Diffrence_time/(1000*3600*24));
    console.log("count days between two dates :\n"+ date1.toDateString()+ "and" + date2.toDateString(), Diffrence_days + "days");