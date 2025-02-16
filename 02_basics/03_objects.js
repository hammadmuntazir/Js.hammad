/*myArray=["h","a"]
myArray[0]=>accessing value in array is not through key
while we use key to access value in object
*/
//singleton =>apni trah ka aik hi object hai,dusri trah banaty hai to singleton nai hota usky multiple instances bn jaty hain
//literal ki trah declare krny  pr singleton nai bnta,constructorsy banay wala object always singleton

//Object.create//is sy bi bana skty hai hum isi method ko constructor method ky through banana kehty hain                                                                                                                                                                                                                                                                                                                                       

           //Object Literals

//const JsUser ={}//empty object bn gaya
//sari keys behind the scene as a string kaam kr rahi hain 


/*interview question  :symbol ko object ki key mn add kro aur mujy print krky dekha do
symbol bnany ky baad direct object my assy likhy gye to
mySym:symbolvalue  =>to string type aye gi 
*/
/*so for using it as symbol i will write it in  square brackets[]
//[mySym] :"Key1"//likhy gye to string ki trah use hoga
access bi assy krna hai=> console.log(objectname[symbolname])
*/
const mySym = Symbol("Key1")

const JsUser={
    name   : "Hammad",
    [mySym]:"myKey1",//khud bataye ga symbol hai
    age:19,
    "full name":"Hammad muntazir",//ab isy hum .sy access kr hi nai skty
    location:"Jhang",
    email:"hammad@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//console.log(JsUser[mySym])
//   //Methods of accessing value
// /*1)famous accessing value  //.laga kr access krlo
// 2)square notaation ky via access kro*/
// console.log(JsUser.email)
// console.log(JsUser["email"])//key ko idr bi isliya as a object likhna pary ga
// console.log(JsUser["full name"])//.sy access hi nai krskty isliye use square notation

/*changing value
JsUser.name="Ali"//will change name
console.log(JsUser)*/

//Freezing value of object=>isky baad object ki value change nai krskty
//Object.freeze(JsUser)//ab iski koi bi value change nai krsky gyein
//ab again name change kryu ga to bi Ali hiu name rahye ga kyunky freeze usky baad kia aur error nai aye ga koi

   //Function 

JsUser.greeting = function(){
  console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
  console.log(`Hello JS user,${this.name}`);//this tells about properties 
}
//console.log(JsUser.greeting)//Hello Js user/n undefined
console.log(JsUser.greeting())//undefined
//console.log(JsUser.greeting);//function(anonymus)//function execute nai hua sirf uska reference aya hai
console.log(JsUser.greetingTwo());