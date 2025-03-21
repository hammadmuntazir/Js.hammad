                    // Array

const myArr =[0,1,2,3,4,5]
/*()paranthesis
[]brackets =>arr in square
{}braces,curly braces

JavaScript array-copy operations create shallow copies=>share same reference point heap wala example*/
//const myHeroes = ["Spiderman","Batman"]

//const myArr2=new Array(1,2,3,4)//square bracket nai likty vo automatically add krleta hai
//console.log(myArr[1]);
//Array methods
/*
myArr.push(6)//simply add values to last of array
myArr.push(7)
myArr.pop()//will remove last value

myArr.unshift(9)//unshift insert at start 
//start mein value add krny sy  subki indexing values change ho gi is waja sy jis ki waja sy computer pr load aye ga jo humny ly kr anna nai
myArr.shift()//shift will remove first one */
// console.log(myArr.includes(9));//pata krna hai kia include hai ,result will boolean
// console.log(myArr.indexOf(9));// koi value na ho to answer -1 atta hai
// console.log(myArr.indexOf(3));


const newArr = myArr.join()
// //Adds all the elements of an array into a string, 
// separated by the specified separator(comma here) string.
//values same aye gi mgr type change hogi

 console.log(myArr);
 console.log(newArr);
//console.log(typeof(newArr));
                   //Slice,Splice
//console.log("A",myArr);//A ky samny array ajaye ga

//slice(startindex,endindex)
const myn1 =myArr.slice(1,3)//index 1 sy start kro aur index 3  ko include nai krna

console.log(myn1);

//console.log("B",myArr)

const myn2 =myArr.splice(1,3)
//console.log("C",myArr)
//console.log(myn2);
//=>//splice  manipulate orignal array while slice manipulate coppy //1 to 3 index tak ko print krvaye ga
//splice last index ko include nai krta aur batata hai number of elements to be deleted
arr3=[1,2,4,5,6,78,9,10,56]
//console.log(arr.splice(3,4))//arr.splice(start count,num of elements to be deleted)
