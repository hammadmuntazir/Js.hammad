//if
  //condition true hai to andar ka code execute kry gyein agr false hai to nai karin gye

// const isUserLoggedIn =true
// const temperatue=41
// if(temperatue===40){
// console.log("less than 50")
// }else{
// console.log("temperatue ir greater than 50")
// }
// //<,>,<=,>=,==,!=,===,!==


// const score=200

// if(score>100){
//     let power="fly"
//     console.log(`User power:${power}`)
// }//curly braces ka separate block scope hota hai
// console.log(`User power:${power}`)


// //scope use kiye begair direct bi likh skty hain,implecet scope but
// //it execute just for one line ,for multiple line ,(comma)
// //lga kr enter krky multiple line likh skty hain but multiple line is not preferable

//const balance=1000

// if(balance>500)console.log("test"),console.log("test2");

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200")
// }

//real life usage
const userLoggedIn =true
const debitCard =true
const LoggedInFromGoogle=false
const LoggedInFromEmail=true
//&&=>and || =>or
if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy Course");
}

if (LoggedInFromEmail || LoggedInFromGoogle ){
    console.log("User Logged in");
}