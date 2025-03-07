 const coding=["js","ruby","java","python","cpp"]
// //call back function mean mujy function dy do mujy kia krna hai
// //call back function ka name nai hota
// coding.forEach(function (val){
//      console.log(val);
// }  )
// //array ka name.forEach(function (jo marzi likh lo var dy ga){jo krna hai vo kro})
             //Arrow Function
// coding.forEach((item)=>{
//     console.log(item)}
// )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)//function ka reference dena hai execute nai krdena

       //sirf item nai deta balky index aur pura array bi deta hai
coding.forEach((item,index,arr)=>{

 //   console.log(item,index,arr);
})

const myCoding=[
    {
        languageName:"Javascript",
        languageFile:"Js"
    },
    
    {
        languageName:"Python",
        languageFile:"py"
    },
    {
        languageName:"C++",
        languageFile:"cpp"
    },

]

myCoding.forEach((item)=>{
    console.log(item);
    console.log(item.languageName)

})
//Object ky andar sy uski value nikal li
//database sy array atta hai array mein mobile name atta hai uski pricing atti hai
//uska buy link atta hai,to mein ny lia ,array aya ,subka value inject krdia webpage mein