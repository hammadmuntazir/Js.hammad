//const userEmail="h@itesh.ai"
//const userEmail=""//empty string false
const userEmail=[]//empty array true


if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Don't have user Email");
}

/*            //Falsy values

false,0,-0,BigInt 0n,"",null,undefined,NaN
BigInt ka 0n
*/

      //truthy values

/*"0","false"," "=>(onespace between quotes),[]=>(empty array),
{}=>(empty object)*/

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj={}

if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
}
/*false ==0
#true
false ==""
#true
0==""
#true
*/

    //Nullish Coalescing Operator(??):null undefined
let val1;
//val1 =5 ?? 10
//val1=null??10//koi program run na kry to null krdo ya value arahi hai to vo krdo
//val1 =undefined ??15

val1 =null??10??15
//output#10
console.log(val1);

         //Ternary Operator
//condition?true:false
const iceTeaPrice =100
iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80")