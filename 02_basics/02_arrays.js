const marvel_heros =["Thor","Ironman","Spiderman"]
const dc_heros =["Superman","Flash","Batman"]
                      //1st Method 
marvel_heros.push(dc_heros)
//Array koi bi data ly leta hai idr array array ko bi as a data single element ly ga 
//output of this condition is 
/*[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

console.log(marvel_heros)
console.log(marvel_heros[3][1]);//3(which is array ) ki 1st value dy ga
           */           //2nd Method

// /*///push work on existing array concate provide us new array
/*const All_heros=marvel_heros.concat(dc_heros)
 console.log(All_heros);*/
//   /*                    //3rd Method
// //spread operator
// const all_new_heros=[...marvel_heros,...dc_heros]//Array got spread and every element become individual

// console.log(all_new_heros);// most people use this ... add krky we can add another value
// */
// /*                   //spreading all values of array
// const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array= another_array.flat(Infinity)
// //if there is array in another array in code and i just donot like it . i will use .flat()
// //function and will get real array and in ()bracket i will write depth
// console.log(real_another_array)
// */

// console.log(Array.isArray("Hammad"))//tell me is array or  not
// console.log(Array.from("Hammad"))//.Array.from() will convert into array
// console.log(Array.from({name:"Hammad"}));//will give me empty array  //interesting


// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3))//return array from set of element

// //read more about array.is,array.from ,array.of

// 