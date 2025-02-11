const name ="hammad"
const repoCount=5
//concatenating both of them
//console.log(name+repoCount + "Value"); outdated syntax
console.log(`Hello my name is${name}and my repo count is ${repoCount}`);
//backticks use krskty and will declare variable in curly bracket after using dollar sign
//i can easily use method in this
//declaring string
const gameName= String("Ha-mm-ad")

console.log(gameName[0]);//accessing key value pair
console.log(gameName.__proto__);//accessing prototype and prototype method
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//kis postion pr konsa character hai bataye ga
console.log(gameName.indexOf("d"));//index pata lgavany ky liye
//orignal value ko change nai kia because primitive stack ko use krty hain aur vo coppy pr kaam ki ijazat deti hai

const newString =gameName.substring(0,4);//(startnum,endnum)//-ve value ko ignore krky 0 sy start kry ga
console.log(newString)

const anotherString=gameName.slice(-5,-1) //we can give -ve value in .slice
console.log(anotherString);

const newStringOne ="  hammad  "//to remove extra space use trim
console.log(newStringOne)
console.log(newStringOne.trim())

const url ="https://hammad.com%20awan"
console.log(url.replace("%20","-"))//(old value,new value)

console.log(url.includes("hammad"))//dekh skty hai kuch hai ya nai result will be true or false

//split(separator,limit)split string into array
console.log(gameName.split("-"));//can split on bases of anything

