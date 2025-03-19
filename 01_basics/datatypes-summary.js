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

//Array ,Objects,Functions non primitive ka datatype function aur function ka function object hota hai
const heros =["Shaktiman","Spiderman","Superman"]
let myObj =
{name:"Hammad",
 age:22,
}
const myFunction = function(){
    console.log("Hello World")
}



//++++++++++++++++Memory in JS
//Stack(Primitive), Heap(Non-Primitive)

let myYoutubename ="hiteshchoudary.com"

let anothername =myYoutubename
anothername ="Chaiaurcode"
console.log(myYoutubename)
console.log(anothername)
//another name ko myYoutubechannel ki coppy di gyi thi ,asal nai dia gaya tha stack mn coppy milti hai heap mn value
let userOne={
    email:"User@google.com",
    upi:"user@ybl"

}
let userTwo=userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)
//dono mein value change hui
//primitive stack mn jaty stack mn jub bi koi cheez ly gye to humy uski coppy hi mily gi
//lekin heap ky andar koi cheeze ly gye to reference hi milta hai mean  orignal value mn change krty hain