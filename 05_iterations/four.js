     //for in loops over Object keys
const myObject={
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by Apple"
}
for (const key in myObject) {
  //     console.log(key);//for keys
  //     console.log(myObject[key]);//for values
//  console.log(`${key} is abbrevation of ${myObject[key]}`);
  
}

//for in for Arrays
const programming=["js","rb","py","java","cpp"]

for(const key in programming){
 //   console.log(key) //for of my directly value arahi thi for in mein keys arahi hain
//  console.log(`${programming[key]}`)                  //arrays ki key by default numbers hoti hain jo 0 sy start hoti
                    //object mein khud sy key daal skty hain
}


// //for in for"Map"
// const map =new Map()
// map.set("IN","India")
// map.set("USA","United States of America")
// map.set("Pak","Pakistan")
// map.set("Fr","France")

// for(const key in map ){
//   console.log(key);
// }
        //for in Does not Work Directly with Maps(but .entries() workaround exists)
//For in normally work over enumerable property names (keys)of an object
//Buts Maps are not traditional object so,for in does not work
//directly

