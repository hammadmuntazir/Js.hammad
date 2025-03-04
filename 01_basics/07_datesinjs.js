// //Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());//will give me only date
//console.log(myDate.toLocaleString());//will give me other time etc too
// console.log(typeof myDate)//is an object

//let myCreatedDate =new Date(2023, 0, 23)//month start with zero in JS
//let myCreatedDate=new Date(2023, 0, 23, 5, 3)//year ,month ,date , hour ,min
//let myCreatedDate =new Date("2023-01-14")//dd/mm/year =>here month starts from 1
//let myCreatedDate =new Date("01-14-2023")//format use in indo Pak mm/dd/year
//console.log(myCreatedDate.toLocaleString());

  //timeStamp
//let myTimeStamp  = Date.now()
//console.log(myTimeStamp);//milli seconds 1,1970

//console.log(myCreatedDate.getTime());//now we can easily compare
//console.log(Math.floor(Date.now()/1000));//for interview getting second

 //let newDate = new Date()
 //console.log(newDate);
// console.log(newDate.getMonth()+1);//month start from 0 so write +1
// console.log(newDate.getDay());//day start from  monday and will get 3 on wednesday

// let newDate = new Date();
// console.log(newDate.toLocaleString("default", { weekday: "long", timeZone: "GMT+05:00" }));