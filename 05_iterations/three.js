//for of
//['',""]
//[{},{},{}]
const arr=[1,2,3,4,5]
//for(const variable of jis cheeze pr loop lagana hai)
for (const num of arr) {
//    console.log(num);
    
}

const greetings="Hello World!"
for(const greet of greetings){
 //   console.log(`Each char is ${greet}`)
 //   if(greet==" ")
 //       break
      if(greet==" ")
        continue
}

    //Maps=>object holds key-value pair
//map apna ap mein object hai//map remember orignal insertion order of key
//object order ko yaad nai rakhty
const map =new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("Pak","Pakistan")
map.set("Fr","France")
//again same value add kryu ga to double entry  nai hogi
//value unique hogi aur jis order mein enter ki hai us order mein hogi
map.set("Pak","Pakistan")
console.log(map);

//assy pura sentex araha hai
for(const key of map){
 //   console.log(key); //istrah kryu ga to pura array ki trah ho jaye ga
}

//key aur value dono ko separate print krny ky liye
for (const[key,value]of map){
    console.log(key,":",value);
    
}

const myObject ={
    Game1:"NFS",
    Game2:"Spiderman"
}
/*for (const [key,value]of myObject){
    console.log(key,":",value)
}*/

//Summary Map()itteratable hai "For of"sy but object itteratable nai hain
 
