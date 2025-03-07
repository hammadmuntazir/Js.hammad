//forEach is for iterating and executing a function on each element
//filter is for creating new array with filtered element
//map is for creating new array with transformed values

const myNumbers =[1,2,3,4,5,6,7,8,9,10]
//map is also call back function //return value automatically
//const newNums=myNumbers.map((num)=>num+10)
//console.log(newNums)
//scope open kry gyein to return lazmi krna hai

//         //doing same by for each
// myNumbers.forEach((item)=>{
//     console.log(item +10)
// })
            
          //Chaining by map
const newNums =myNumbers
                     .map((num)=> num*10)
                     .map((num)=>num+1)
                     .filter((num)=>num>=40)
//Jtni marzi chain lga skty hain  //1st function ky baad lgny wali value pass aye gi
console.log(newNums);