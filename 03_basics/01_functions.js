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
//console.log(loginUserMessage())//value hi pass nai ki to kia atta hai undefined, null nai atta,interview question

                  //
/*hum kuch projects bnaye gyein jesy eccomerence website  un projects mn aksar shopping cart hoti hai un mn user
add kiye  hi jata hai saman hai, humy nai pta abhi ktny numbers of item anny waly hain
humy bs sub ki price add krni hai humy pta nai ktny arrugment anny waly hain to us hissab 
sy parameter tyar krny hoty hain */ 
//Function ky name assy dein dekh kr pta lg jaye kis cheese ka hai
  
/*function CalculateCartPrice(num1){
      return num1
} 
console.log(CalculateCartPrice(2))
//console.log(CalculateCartPrice(200,300,400))//problem yh aye gi sirf200 print hoga bcz aik parameter hai function mn

*/

/*           Rest Operator
//to is problem ko solve krny ky liye aik rest operator hota hai
...(3dots ko hi  rest  bola jata hai aur isi ko hi spread bola jata hai bs use case pr depend krta hai
kub rest boly gye kub spread
rest ka matlb hai jtna bi item mila hai vo bi khullay mn mil raha hai , is sub  ko aik bundle
mn pack kro aur mujy dy do
*/

/*
function CalculateCartPrice(...num1){
    return num1
}
console.log(CalculateCartPrice(100,200,400))
//rest operator ky 3 dots likhny ka impact yh hua hai ky mujy aik array mila hai
//mujy jtna maal chyiea cart mn bhejiya ,mn unnsub ko atleast array mn daal paya hu
//array mn loop lagana seekh kr mn un subko add kr hi du ga
//idr mn ny smjha function mn multiple values kesy pass hoti hai
//sara khel,...(3dots ka hai)
*/
                       //Aik aur case atta hai
function calculateCartPrice(val1 ,val2 , ...num1){ 
    return num1
}
//console.log(calculateCartPrice(100,200,400,2000))
//idr num1 mn kia value jaye gi <interview question>
//100,200 value 1 aur 2 ly gye baki rest jtni cheezain hai vo jaye gi "rest"ki waja sy array mn

                       //
const user={
    username:"hammad",
    price:199 //agr galti sy price ki jaga prices likh dia aur usy na likawya hua to price ki value ki jaga undefined ajaye ga answer
}
//is object ko function mn kesay pass kia jata hai aur kesay use kia jata hai
function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
     
}
//user ki jaga anyobject likhny sy sirf user wala object jo hum ny bnaya hai sirf usy nai balky koi sa
// bi object pass krsky
//handleObject(user)//1st method
//call krty huye=>handleObject(compulsory object hi pass kry gyein)

//2nd Method =>//
handleObject({
    username:"Ali",
    price :399
})
//direct object bi pass krskty hain zaroori nai hai bana kr pass karin

                        //isi trah array bi pass krskty hain
const  myNewArray =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}    
//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,300,400,500]))
//variable mn daal kr pass kro ya direct marzi hai