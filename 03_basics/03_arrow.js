//=>//browser mein jo global object hai vo hai window object
const user={
    username :"Hammad",
    price :999,

    welcomeMessage :function(){
        console.log(`${this.username},welcome to website`);//this=>for referring current contex
 //is scope mein jitny bi variable hai ko access krny ky liye this       
        console.log(this);        
    }

}
// user.welcomeMessage()
// user.username="Ali"//humny kaha tha jo bi current context ho usky according welcome kro
// user.welcomeMessage()//isliye usky according hua

//console.log(this);
   //node enviroment mein this refer kr raha hai aik empty object ko abhi global mein
   //koi contex  hi nai isliya empty

// function chai(){
//     let username="Ali"//yh context object mein hi kaam kr raha function mn assy this use nai hota
//     console.log(this.username);
// }
// chai()
                 //is function decalartion method mein bi nai hoga
// const chai= function(){
//     let username="Hitesh"
//     console.log(this.username)
// }
// chai()
  
              //Arrow Function
// const chai = ()=>{
//     let username="Hammad"
//     console.log(this.username);
// }
// chai()

   //basic syntax of arrow function 
   //()=>{}
   //const addTwo=()=>{}//variable mein store krskty hain ,neecay parameter lu ga
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

   //upar wala tha basic aur method impleceted return ay use kia jata hai
   //us mn apko curly braces {} use nai krnay party,matlb apko likhny ki zarort nai hai
   //aur us mein likhni wali baat same line pr ly jayo aur return likny ki zarort nai bcz
   //one line statement hai
//const addTwo =(num1, num2)=> num1+num2
//const addTwo =(num1, num2)=> (num1+num2)//curly mn likha to return keyword likhna pary ga parenthsis mein kia to nai likhna pary ga
    //agr object return krna ho to ,obj return ky liye unhy parenthesis mn wrape krna hi hoga
    const addTwo=(num1,num2)=>({username:"hammad"})
console.log(addTwo(3,4))

//implicit return without return keyword ,explict return return lagan prta hai

              //Array mn asssy use krskty hain
//const myArray =[2,5,3,7,8]
//myArray.forEach(function(){})
//myArray.forEach(()=>{})