//Reduce
/* const array1=[1,2,3,4];
const initialValue=0;
const sumWithIntial =array1.reduce(
(accumulator,currentValue)=>accumulator+currentValue,
intialValue
);*/
const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
// },0)//jo bi value ,comma ky baad dein gye vo aye gi acc mein start mein
// console.log (myTotal);

//shopping cart ky sary bills ko add krna

const myTotal=myNums.reduce((acc,currval)=>(acc+currval),0)
//console.log(myTotal)

const shoppingCart=[
    {
        itemName:"Js course",
        price:2999
    },
    {
       itemName:"Py Course",
       price:999
    },
    {
        itemName:"Django",
        price:1999
    }
]

const TotalPrice=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(TotalPrice)