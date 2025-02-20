/*jo bi code likha hai usy aik packet mn bnd krdia hai vo packet 
jtni baar jidr chiea  usky coppies ly jaskty hain*/

//function variable name(){defination}
function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("M");
    console.log("A");
    console.log("D");
}
/*jtni baar call krvana hai use krskty hu,
  variable name=>reference,()=>execute//sirf reference nai dena execute bi krvana hai
*/
//sayMyName()

// function addTwoNumbers(number1,number2){
//    console.log(number1 + number2);
// }
// addTwoNumbers(3,4)//agr arrugment na dein to answer atta hai not a number
// //function ki defination mn hum jo bi input lety hain unhy kehty hain parameters
// //function ko call krvaty tub jo values  pass krty hain unhy khety hai arrugments
// const result=addTwoNumbers(9,10)
// console.log("Result",result)
// //bohat sy log smjty hai console return ki trah hai mgr dono separate cheezain hai
// //console print krny ka yh matlb nai function vo value return bi kr raha hai
// //jesy upar result mn hum console.log ki value store nai krva saky isliye undefined aya

function addTwoNumbers(number1,number2){
    // let result =number1 + number2
    // return result
    // console.log("Hammad")//print nai hoga return ky baad kuch print nai hota
    // //jub function execute hoga to is result ko return hoga,is mn ab actuall mn value hogi
                     //2nd method
        return number1 + number2
        //upar wala result aur function ky bahir ka result separate cheezain hain
        //return sy hum value ksi variable m store krlety hain
}
const result = addTwoNumbers(3,5)
//console.log("Result:",result);

                        //
//function loginUserMessage(username ="Hammad")//kuch bi nai kia to Hammad pass hogi value
//istrah bi krskty default value yh if value mn jaye gi hi nai because minimum value Hammad hogi
function loginUserMessage(username){
    //in javascript (""), (undefined) are considered as false value
    //if(!username){} istrah bi likh skty 
    if(username===undefined){
    console.log("Please Enter username")
    return//agr mn chata hu neechy wali line execute hi na ho to return krlu ga
}
    return`${username} , just logged in`
}
loginUserMessage("Hammad")//function execute hua usny value return krdi mgr print nai ki
//console.log(loginUserMessage("Hammad"))
console.log(loginUserMessage())//value hi pass nai ki to kia atta hai undefined, null nai atta,interview question

