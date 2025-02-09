/*JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.
*/
//2 datatypes =>primitive and non primitive
const score =100
const scoreValue =100.3

const isLoggedIn =false

const outsideTemp=null
let userEmail; //if  not assign will get undefined type

const id=Symbol("123")
const anotherid=Symbol("123")//itna unique hogya same hony ky bawajood equal nai hoga
console.log(id === anotherid)//false

const bigNumber =34566643982n //n lgya to big int bn jaye ga
//Primitive(call by value)
//7 types:string,Number,Boolean,null,undefined,symbol,BigInt

//Reference Type(Non Primitive)

//Array ,Objects,Functions non primitive ka datatype function aur function ka function object
const heros =["Shaktiman","Spiderman","Superman"]
let myObj =
{name:"Hammad",
 age:22,
}
const myFunction = function(){
    console.log("Hello World")
}