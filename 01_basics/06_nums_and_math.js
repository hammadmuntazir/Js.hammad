// const score =400
// console.log(score)
// const balance =new Number(100)
// console.log(balance)

 //console.log(balance.toString().length);
 //console.log(balance.toFixed(2));//.ky baad 2 digits askaty hain//for percision value used in ecommerence website etc

///*const otherNumber =23.8966//23.9
// const otherNumber =123.8966//124*/
// const otherNumber =1123.8966//hum dekhni chyiea precision mn decimal sy pahly ktni value aye gi 
//console.log(otherNumber.toPrecision(5));

// const hundreds =1000000
// console.log(hundreds.toLocaleString())//by default comma will comes 1,000,000 US standard
// console.log(hundreds.toLocaleString('en-IN'));//according to indian standard

//  +++++++++++ Maths  ++++++++++++++++++++

// console.log(Math);//is object and have many properties
// console.log(Math.abs(-4));//abs =>absolute value -ve changes to postive
// console.log(Math.round(4.6))//will do round off
// console.log(Math.floor(4.9));//floor mn lowest value ly ga //4
// console.log(Math.ceil(4.3));//5//ceiling mn highest value ly ga
// console.log(Math.min(4,3,6,8));//3 will  give lowest value
// console.log(Math.max(3,7,5,4))//7 will give highest value

// console.log(Math.random());// will give value between 0 and 1
console.log((Math.floor(Math.random()*10)+1));//minimum value bi 1
// // lets suppose i am playing a game and i want values between some numbers
// //i can use it  but we know it give value between 0 and 1 so i will multiply it by some 
// //number so value will be in decimal and there is chance of comming of 0 so i will
// //also add 1 to them, so we have idea atleast value will more than 1
// //also use floor to round off to lowest value
// //Formula
// const min=10
// const max=20

// console.log(Math.floor(Math.random()*(max-min+1)) +min)
// //0 ko avoid krny ky liye +1 kia ..max-min range aye saat min add krdia
