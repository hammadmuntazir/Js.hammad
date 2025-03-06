//for loop
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
    //cntrl+D select multiple same word and just change them//
    */
for (let i=0; i<=10;i++){
    const element =i;
//  console.log(element);
    if (element ==5){
        console.log("5 is best number");
    }
//    console.log(element);
    }//function ky element scope ky bahir nai print hoskta


for (let i=0;i<=10;i++){
   //   console.log(`Outer loop value:${i}`);
    for(j=1;j<=10;j++){
       // console.log(`Inner Loop Value ${j} and outer loop ${i}`);
   //  console.log(`${i} * ${j} = ${i * j}`)
    }
}

let myArray=["Flash","Batman","Superman"]
for(index=0;index<myArray.length;index++){
    const element=myArray[index]
//    console.log(element)
}

//break and continue
//break ky baad kuch execute nai hoga
/*for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`value of index is ${index}`);
    
}*/

//continue aik baar ignore krdo iteration ignore krdo
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue//5 ko skip krdo
    }
    console.log(`value of index is ${index}`);
    
}