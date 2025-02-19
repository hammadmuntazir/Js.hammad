// //const tinderUser = new Object()      //=>singleton object as by constructor
// //console.log(tinderUser)=>dekhy gyein to object hi aye ga singleton object
// const tinderUser={}//not singleton obj

// tinderUser.id="123abc"
// tinderUser.name="Ali"
// tinderUser.isLoggedIn=false

// //console.log(tinderUser)

// const regularUser ={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Hammad",
//             lastname:"Muntazir"
//         }
//     }
// }
// //console.log(regularUser.fullname.userfullname.firstname)
// //dot laga kr hum object ky andar ky object ko access krlain gye
// //agr full name exist hi na krta ho to hum yh sentex usrty hain agr yh value hai to kro
// //kafi baar jub Api sy response atta hai to humy yh sentex use krna parta hai agr yh value hai to kro wrna if else krna prta hai
// //console.log(regularUser.fullname?.userfullname.firstname)
            
//             //Method 1
// const  obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj4={5:"e",6:"f"}
// /*const obj3={obj1,obj2}
// console.log(obj3)
// //vohi array wala problem object mn object ajaye ga
// */
      
//             //Method2(isy bi kum hi use krna hai)
// const obj3 =Object.assign({},obj1,obj2,obj4)
// //const obj3  =Object.assign(target,source)
// //{}=>is target here after getting value from sources value is returned to target
// //target ==obj3 =>sari values target mn jati hai ksi ko assign krlo zaida acha hai
// //.assign(idr value dy dein jo bi object ko assign krna hai)
// //{}=>is optional,dena acha hai jtni b i values hogi sub combine ho jaye gi aur gurranted hai result yahi hai
// //first act as target baki as a source
// console.log(obj3);
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

//              //Method3 //mostly use split concept
// const obj5={...obj1,...obj2}
// //console.log(obj5);

//               //concept we are going to use mostly when values came from database
// //array of objects
//               const users=[
//     {
//         id:1,
//         email:"h@gmail.com",
//     },
//     {
//         id:1,
//         email:"h@gmail.com",
//     },
//     {
//         id:1,
//         email:"h@gmail.com",
//     },
//     {
//         id:1,
//         email:"h@gmail.com",
//     }
// ]
// //array ky andar bohat sary objects hain aur apko unhy loop through krna hai 
// //ya koi value print krni hai
// users[1].email
// //user[array ki 1st value access krni hai jo hai object so dot lga kr kryu ga].object
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// //Obejct.keys(kiski keys)
// //datatype hai array ab hum chiea to is pr loop laga skty hain bohat si jaga pr kaam krskty hain
// console.log(Object.values(tinderUser))

//    //kum use annay waly aik aur sentex
// console.log(Object.entries(tinderUser))
// //array ky andar array mila hai ,
// //haar aik key value ko array bana dy ga

//      // kafi baar hum object mn aik loop through kr rahye hain pura
//      //aur loop through krty waqt aik value nikal rahye hain,value nikalty huye
//      //kafi baar  vo value exist hi nai krti agr value exist nai krti to crash ky chances hain
//      //ya to usy manual dekh lain ya poch lain kia apky yh value hai
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// //property ko use krny sy pahly aye aur method ko use krky dekhain kia usky pass yh property hai

 
           /* +++++++++++++++++++++++++++++++++*/
//Destructuring dono ,array and object ki hoti hai
const course={
    coursename:"Js in Urdu",
    price:"999",
    courseInstructor:"Hitesh Choudary"
}
/*console.log(course.courseInstructor)
//aksr jub humy code thora sa clean bnana hota hai
//to jtni baar print kr rahye haar baar course.name etc likhna thora ajeeb sa hai
//iski jaga aik aur syntax hai
*/
const{courseInstructor :instructor}=course
//const{kia value extract krni hai : marzi hai apny hissab sy name dy skty hain}=kidr sy value access krni hai course object sy
////console.log(courseInstructor);
//agr mujy lgta hai course instructor kafi bara name hai to mn apny hissab sy bi name dy skta hu
console.log(instructor)//same result aye ga
//isi ko bolty hai hum kesy object ko destructor krty hain

/*      // react etc mn kuch method hoty hain
const navbar = ({company})=>{

}
navbar(company ="hammad")
//parenthesis mn by default hota hai "props.company"hota to yh nai krty
//vohi curly brace likh kr name mn store krva lety hain 
//kbhi bi parenthesis mn curly braces ka syntax dekhain gye to pta lgy ga destructuring ki ja rahi hai
*/

/*
{
    name:"Hammad",
    course:"Js in hindi",
    price:"free"
}
*/


/*
//https://api.github.com/users/hiteshchoudhary  
//example of Jason Api object hi hai mgr name nai
//Mujy seekhna hai fetch()method kesy use krty hain?
//fetch method sy mn URL call kryu ga aur mujy as a resuly yh data mil jaye ga
//istrah mujy APIs ki value mil jati hai
//ab mujy Object smjh mn atta hai to mn isy convert kryu ga Object andar aur
//phir aik aik value nikaal lu ga ,bs itna hi atta hai API ky andar
*/
                //2nd method
//Api array ky format mn bi milti hai,us mn kafi objects hoty hain
[
    {},
    {},
    {}
]
//mean dono form mn API mil skta hai
//JTNA bi API hai sara Jason format hi ,Jason is simply javascript object notation which is n ot only limited to JS